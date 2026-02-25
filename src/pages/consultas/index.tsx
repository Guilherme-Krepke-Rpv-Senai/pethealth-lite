import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineCalendarToday } from "react-icons/md";

type Tarefa = {
  id: string;
  pet: string;
};

export function Consultas() {
  const [pets, setPets] = useState<Tarefa[]>([]);

  useEffect(() => {
    const petsSalvos = localStorage.getItem("Pets");

    if (petsSalvos) {
      setPets(JSON.parse(petsSalvos));
    }
  }, []);

  const formRules = z.object({
    pet: z.string().min(1, "Selecione um pet!"),
    date: z.string().min(1, "Selecione uma data!"),
    schedule: z.string().min(1, "Selecione um horário!"),
    reason: z
      .string()
      .min(5, "O motivo deve ter no mínimo 5 caracteres!")
      .max(200, "Máximo de 200 caracteres!"),
  });

  type IAppointmentForm = z.infer<typeof formRules>;

  const [allAppointments, setAppointment] = useState<IAppointmentForm[]>([]);

  function addAppointment(appointment: IAppointmentForm): void {
    setAppointment((oldState) => [...oldState, appointment]);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IAppointmentForm>({
    resolver: zodResolver(formRules),
  });

  function submitForm(data: IAppointmentForm) {
    addAppointment(data);
    reset();
  }

  useEffect(() => {
    console.log("Lista de consultas atualizada:");
    console.table(allAppointments);
  }, [allAppointments]);

  return (
    <>
      <div className="mt-30 flex flex-col items-center justify-center gap-15 scale-80">
        <div className="bg-green-100 rounded-xl w-200 flex items-center gap-10 p-8">
          <span className="scale-150 text-white bg-green-700 p-3 rounded-xl">
            <FaUserDoctor />
          </span>
          <div className="text-left">
            <p className="font-bold text-[1.5rem] text-black">Dr. Silva</p>
            <p className="text-slate-500 text-[1.2rem]">
              CRMV 12345 - Clínica Geral Veterinária
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(submitForm)}
          className="border border-slate-200 bg-white p-15 rounded-xl flex flex-col gap-15 items-center"
        >
          <span className="text-green-600 bg-green-100 rounded-xl scale-200 p-3 w-fit h-fit">
            <MdOutlineCalendarToday />
          </span>

          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-bold text-black text-center">
              Agendar Consulta
            </h1>
            <h2 className="text-3xl text-slate-500 text-center">
              Selecione o pet e preencha os detalhes da consulta
            </h2>
          </div>

          <div className="relative w-full">
            <label
              htmlFor="inputPet"
              className="font-bold text-[1.5rem] absolute left-5 -top-10"
            >
              Pet
            </label>
            <select
              id="inputPet"
              {...register("pet")}
              className="w-full p-4 border border-slate-200 bg-slate-100 rounded-xl"
            >
              <option value="">Selecione o pet</option>
              {pets.map((pets) => (
                <div key={pets.id}>
                  <option>{pets.pet}</option>
                </div>
              ))}
            </select>
            {errors.pet && (
              <span className="absolute -bottom-6 left-2 text-red-700 text-[0.75rem]">
                {errors.pet.message}
              </span>
            )}
          </div>

          <div className="relative w-full flex gap-5">
            <div className="relative w-full">
              <label
                htmlFor="inputDate"
                className="font-bold text-[1.5rem] absolute left-5 -top-10"
              >
                Data
              </label>
              <input
                type="date"
                id="inputDate"
                {...register("date")}
                className="p-4 border border-slate-200 bg-slate-100 rounded-xl w-full"
              />
              {errors.date && (
                <span className="absolute -bottom-6 left-2 text-red-700 text-[0.75rem]">
                  {errors.date.message}
                </span>
              )}
            </div>

            <div className="relative w-full">
              <label
                htmlFor="inputSchedule"
                className="font-bold text-[1.5rem] absolute left-5 -top-10"
              >
                Horário
              </label>
              <input
                type="time"
                id="inputSchedule"
                {...register("schedule")}
                className="p-4 border border-slate-200 bg-slate-100 rounded-xl w-full"
              />
              {errors.schedule && (
                <span className="absolute -bottom-6 left-2 text-red-700 text-[0.75rem]">
                  {errors.schedule.message}
                </span>
              )}
            </div>
          </div>

          <div className="relative w-full">
            <label
              htmlFor="inputReason"
              className="font-bold text-[1.5rem] absolute left-5 -top-10"
            >
              Motivo
            </label>
            <textarea
              id="inputReason"
              placeholder="Descreva o motivo da consulta..."
              {...register("reason")}
              className="p-4 border border-slate-200 bg-slate-100 rounded-xl w-full"
            />
            {errors.reason && (
              <span className="absolute -bottom-6 left-2 text-red-700 text-[0.75rem]">
                {errors.reason.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="bg-green-700 w-full p-3 text-center rounded-xl text-white font-bold cursor-pointer"
          >
            Agendar
          </button>
        </form>
      </div>
    </>
  );
}
