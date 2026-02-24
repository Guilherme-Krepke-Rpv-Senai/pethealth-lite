export function Listagem() {
  return (
    <>
      <div className="bg-cyan-100 w-full h-screen flex flex-col items-center justify-center ">
        <div className="bg-white ">
          <div className="">
            <h1 className="text-4xl font-bold text-green-500 text-center">
              Pacientes Cadastrados
            </h1>
          </div>
          <div className=" flex flex-col items-">
            <div className="flex text-black ">
            <p>nome</p>
            <p>especie</p>
            <p>tutor</p>
            <p>Ações</p>
            <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
