import { NavLink} from 'react-router-dom';
import { MdOutlineCalendarToday } from "react-icons/md";
import { RiTodoLine } from "react-icons/ri";
import { MdOutlinePets } from "react-icons/md";

export function Home(){
    
    return (
        <>
        <div className='mt-50 w-full flex flex-col items-center justify-center'>
            <div className='text-center flex flex-col gap-5'>
                <h1 className='text-6xl font-bold text-black'>Bem-Vindo ao <span className='text-green-600'>PetHealt Lite</span></h1>
                <h4 className='text-[1.3rem] text-gray-400'>Gerencie seus pacientes e consultas veterinárias de forma simples, rápida e organizada!</h4>
            </div>
                
            <div className="flex justify-evenly w-full my-30 px-20">
                <NavLink to={'/pacientes'} className="w-80 bg-white flex flex-col items-center justify-center gap-3 border border-slate-300 rounded-xl p-10 text-black cursor-pointer text-center transition-all duration-300 hover:shadow-[0_10px_20px_0px_rgba(0,0,0,0.2)]">
                    <span className='text-green-600 font-bold bg-green-100 rounded-xl scale-200 p-2 mb-5 w-fit h-fit'><MdOutlinePets/></span>
                    <h1 className="tracking-[2px] text-[1.5rem] text-black font-bold">Cadastrar Pet</h1>
                    <p className="text-gray-400 text-justify">Transforme caos em organização. Registre, organize e acompanhe 
                        suas tarefas, defina prioridades e mantenha tudo sob controle em um só lugar.</p>
                </NavLink>
                <NavLink to={'/consultas'} className="w-80 bg-white flex flex-col items-center justify-center gap-3 border border-slate-300 rounded-xl p-10 text-black cursor-pointer text-center transition-all duration-300 hover:shadow-[0_10px_20px_0px_rgba(0,0,0,0.2)]">
                    <span className='text-green-600 font-bold bg-green-100 rounded-xl scale-200 p-2 mb-5 w-fit h-fit'><MdOutlineCalendarToday/></span>
                    <h1 className="tracking-[2px] text-[1.5rem] text-black font-bold">Agendar Consulta</h1>
                    <p className="text-gray-400 text-justify">Centralize seus contatos com praticidade e segurança. Cadastre, 
                        organize e tenha todas as informações importantes sempre à mão.</p>
                </NavLink>
                <NavLink to={'/listagem'} className="w-80 bg-white flex flex-col items-center justify-center gap-3 border border-slate-300 rounded-xl p-10 text-black cursor-pointer text-center transition-all duration-300 hover:shadow-[0_10px_20px_0px_rgba(0,0,0,0.2)]">
                    <span className='text-green-600 font-bold bg-green-100 rounded-xl scale-200 p-2 mb-5 w-fit h-fit'><RiTodoLine/></span>
                    <h1 className="tracking-[2px] text-[1.5rem] text-black font-bold">Ver Pacientes</h1>
                    <p className="text-gray-400 text-justify">Controle da sua vida financeira de maneira prática. Registre suas 
                        entradas e saídas, visualize seu saldo total para tomar decisões mais inteligentes sobre seu dinheiro.</p>
                </NavLink>
            </div>
        </div>
            
        </>
    )
}