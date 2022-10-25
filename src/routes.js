import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Acai from './pages/prova-1/acai';
import VerificaSigno from './pages/prova-1/verificasigno';
import VerificarPeso from './pages/prova-1/verificarpeso';
import SalarioLiquido from './pages/prova-2/salario-liquido';
import Temperatura from './pages/prova-2/temperatura';
import Paradas from './pages/prova-2/paradas';
import Orcamento from './pages/prova-3/orcamento';
import ContarAte from './pages/prova-4/contarAte';
import FazerLinha from './pages/prova-4/fazer-linha';
import FazerForma from './pages/prova-4/fazer-forma';
import CalcularQTD from './pages/prova-6'


function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Acai />}></Route>
                <Route path='/verificarsigno' element={<VerificaSigno />}></Route>
                <Route path='/verificarpeso' element={<VerificarPeso />}></Route>
                <Route path='/salarioLiquido' element={<SalarioLiquido/>}></Route>
                <Route path='/temperatura' element={<Temperatura/>}></Route>
                <Route path='orcamento' element={<Orcamento/>}></Route>
                <Route path='/paradas' element={<Paradas/>}></Route>
                <Route path='/contar' element={<ContarAte/>}></Route>
                <Route path='/linha' element={<FazerLinha/>}></Route>
                <Route path='/forma' element={<FazerForma/>}></Route>
                <Route path='/calculaqtd' element={<CalcularQTD/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;