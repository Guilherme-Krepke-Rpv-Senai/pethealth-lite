import reactLogo from '../assets/react-logo.png';
import { NavLink, useLocation} from 'react-router-dom';
import { MdOutlinePets } from "react-icons/md";

export function Header() {

    const { pathname } = useLocation()
    const currentPage = pathname

    const currentPageCSS = "text-green-600 font-bold bg-green-100 rounded-xl py-1 px-5";
    
    return (
            <header className='fixed top-0 z-999 backdrop-blur-sm bg-white border border-[#e1e6eb] flex items-center justify-between p-5 px-30 w-full h-20'>
                <NavLink to={'/'}>
                    <div className="flex gap-2 text-green-600 items-center scale-200 font-bold">
                        <MdOutlinePets/><span> PetHealth Lite</span>
                    </div>
                </NavLink>

                <div className="flex gap-7 items-center text-[1.2rem]">
                    <NavLink to={'/'} className={`hover:text-green-500 transition-all duration-150 ${currentPage === '/' ? currentPageCSS : 'text-black'}`}>Home</NavLink>
                    <NavLink to={'/pacientes'} className={`hover:text-green-500 transition-all duration-150 ${currentPage === '/pacientes' ? currentPageCSS : 'text-black'}`}>Pacientes</NavLink>
                    <NavLink to={'/consultas'} className={`hover:text-green-500 transition-all duration-150 ${currentPage === '/consultas' ? currentPageCSS : 'text-black'}`}>Consultas</NavLink>
                    <NavLink to={'/listagem'} className={`hover:text-green-500 transition-all duration-150 ${currentPage === '/listagem' ? currentPageCSS : 'text-black'}`}>Listagem</NavLink>
                </div>
            </header>
    )
}