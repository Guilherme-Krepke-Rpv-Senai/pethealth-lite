import { BrowserRouter, Routes, Route, NavLink, useLocation} from 'react-router-dom'
import { Home } from './pages/home'
import { Pacientes } from './pages/pacientes'
import { Consultas } from './pages/consultas'
import { Listagem } from './pages/listagem'
import { Header } from "./components/header"
 
export function App() {

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/pacientes' element={<Pacientes />} />
                <Route path='/consultas' element={<Consultas />} />
                <Route path='/listagem' element={<Listagem />} />
            </Routes>
        </BrowserRouter>
    )
}