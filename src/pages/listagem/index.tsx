import { useEffect, useState } from "react";
import { RiTodoLine } from "react-icons/ri";
type Tarefa = {
  id: string;
  pet: string;
  especie: string;
  raca: string;
  tutor: string;
};

export function Listagem() {
  const [pets, setPets] = useState<Tarefa[]>([]);

  useEffect(() => {
    const petsSalvos = localStorage.getItem("Pets");

    if (petsSalvos) {
      setPets(JSON.parse(petsSalvos));
    }
  }, []);

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center ">
        <div className="bg-white w-200 h-fit rounded-xl flex flex-col gap-8 shadow-lg">
          <div className="mt-4">
            <h1 className="text-4xl font-bold text-green-500 text-center">
              <div className="flex items-center justify-center">
                <RiTodoLine />
              </div>
              Pacientes Cadastrados
            </h1>
          </div>
          <div className="w-full h-fit mb-4 flex px-8 text-black justify-between">

                <table className="-w-full h-fit flex flex-col intems-center gap-4">
                  <thead className="flex items-center gap-42">
                    <tr>
                      <th>Nome</th>
                    </tr>
                    <tr>
                      <th>Especie:</th>
                    </tr>
                    <tr>
                      <th>Tutor</th>
                    </tr>
                    <tr>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <hr />
            {pets.map((pets) => (
              <div key={pets.id}>
                  <tbody className="flex items-center gap-42">
                    <tr>
                      <th>{pets.pet}</th>
                    </tr>
                    <tr>
                      <th>{pets.especie}</th>
                    </tr>
                    <tr>
                      <th>{pets.tutor}</th>
                    </tr>
                    <tr>
                      <button className="bg-gray-100 w-18 border-gray-300 rounded-lg">
                        Detalhes
                      </button>
                    </tr>
                  </tbody>
                                </div>
            ))}
                </table>

          </div>
        </div>
      </div>
    </>
  );
}
