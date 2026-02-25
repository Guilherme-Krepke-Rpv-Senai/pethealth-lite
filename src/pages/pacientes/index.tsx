import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";


const validacaoCadastro = z.object({
  pet: z
    .string()
    .min(2, "O nome do Pet deve ter pelo menos 2 caracteres")
    .max(16, "O nome de usuário não pode ultrapassar 16 dígitos."),
  especie: z.enum(["Cachorro", "Gato", "Coelho", "Passaro"], "Selecione uma especie."),
  raca: z
    .string()
    .min(2, "A raça deve ter pelo menos 2 caracteres")
    .max(16, "A Raça não pode ultrapassar 16 caracteres"),
  tutor: z
    .string()
    .min(3, "O tutor deve ter pelo menos 3 caracteres")
    .max(16, "O nome do tutor não pode ultrapassar 16 dígitos."),
});

type LoginFormData = z.infer<typeof validacaoCadastro>;

type Tarefa = LoginFormData & {
  id: string;
};

export function Pacientes(){
  const [Pets, setPets] = useState<Tarefa[]>([]);

  useEffect(() => {
    const PetsArmazenados = localStorage.getItem("Pets");

    if (PetsArmazenados === null) {
      return setPets([]);
    }

    setPets(JSON.parse(PetsArmazenados));
  }, []);

  const formulario = useForm<LoginFormData>({
    resolver: zodResolver(validacaoCadastro), // Conecta o Zod ao formulário
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formulario;

  const onSubmit = (data: LoginFormData) => {
    console.log("Usuário digitado:", data.pet);
    console.log("email digitado:", data.especie);
  };

  function submeterFormulario(camposDoFormulario: LoginFormData) {
    const novoPet = {
      id: Math.random().toString(36).substring(2, 9),
      pet: camposDoFormulario.pet,
      especie: camposDoFormulario.especie,
      raca: camposDoFormulario.raca,
      tutor: camposDoFormulario.tutor
    };

    setPets((oldState) => [...oldState, novoPet]);
    formulario.reset();
    localStorage.setItem("Pets", JSON.stringify([...Pets, novoPet])); // transforma o json em string para ser inserido no localStorage da chave 'enderecos'.
    return setPets;
  }

  return (
    <>
      <div className='bg-slate-100 h-[100vh] flex flex-col justify-center items-center gap-[8px]'>
        <div className="flex gap-8 m-[64px]">
          <form
            action=""
            className="flex flex-col gap-[8px] bg-white rounded-xl py-16 px-16"
            onSubmit={formulario.handleSubmit(submeterFormulario)}
          >


            <h1 className="text-6xl flex justify-center text-green-500">Cadastrar Pets </h1>
            <p className="flex justify-center">
              Prrencha os dados do pet e seu tutor
            </p>
            <div className="py-5 w-[640px]">
              <div className="flex flex-col m-[16px]">
                <label htmlFor="" className="px-2 m-1">
                  Pet
                </label>
                <input
                  className="py-2 px-4 m-w-[320px] rounded-xl border-2 border-zinc-400"
                  type="text"
                  placeholder="Digite seu usuário"
                  {...register("pet")}
                />
                {errors.pet && (
                  <span className="text-red-600 text-[14px]">
                    {errors.pet.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col m-[16px]">
                <label htmlFor="" className="px-2 m-1">
                  Espécie
                </label>

                <select
                  className="py-2 px-4 m-w-[320px] rounded-xl border-2 border-zinc-400"
                  {...register("especie")}
                >
                  <option className="bg-slate-500 " value="">
                    Selecione uma opção...
                  </option>
                  <option className="bg-slate-500" value="Cachorro">
                    Cachorro
                  </option>
                  <option className="bg-slate-500" value="Gato">
                    Gato
                  </option>
                  <option className="bg-slate-500" value="Coelho">
                    Coelho
                  </option>
                  <option className="bg-slate-500" value="Passaro">
                    Pássaro
                  </option>
                </select>

                {errors.especie && (
                  <span className="text-red-600 text-[14px]">
                    {errors.especie.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col m-[16px]">
                <label htmlFor="" className="px-2 m-1">
                  Raca{" "}
                </label>
                <input
                  className="py-2 px-4 m-w-[320px] rounded-xl border-2 border-zinc-400"
                  type="text"
                  placeholder="Raça"
                  {...register("raca")}
                />
                {errors.raca && (
                  <span className="text-red-600 text-[14px]">
                    {errors.raca.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col m-[16px]">
                <label htmlFor="" className="px-2 m-1">
                  Tutor{" "}
                </label>
                <input
                  className="py-2 px-4 m-w-[320px] rounded-xl border-2 border-zinc-400"
                  type="text"
                  placeholder="Raça"
                  {...register("tutor")}
                />
                {errors.tutor && (
                  <span className="text-red-600 text-[14px]">
                    {errors.tutor.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-green-500 py-2 px-[260px] rounded-xl"
              >
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
