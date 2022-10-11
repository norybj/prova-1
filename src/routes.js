import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Acai from './pages/prova-1/acai';
import VerificaSigno from './pages/prova-1/verificasigno';
import VerificarPeso from './pages/prova-1/verificarpeso';
import SalarioLiquido from './pages/prova-2/salario-liquido';
import Temperatura from './pages/prova-2/temperatura';
import Paradas from './pages/prova-2/paradas';


function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Acai />}></Route>
                <Route path='/verificarsigno' element={<VerificaSigno />}></Route>
                <Route path='/verificarpeso' element={<VerificarPeso />}></Route>
                <Route path='/salarioLiquido' element={<SalarioLiquido/>}></Route>
                <Route path='/temperatura' element={<Temperatura/>}></Route>
                <Route path='/paradas' element={<Paradas/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;