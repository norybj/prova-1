import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Acai from './pages/acai';
import VerificaSigno from './pages/verificasigno';
import VerificarPeso from './pages/verificarpeso';


function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Acai />}></Route>
                <Route path='/verificarsigno' element={<VerificaSigno />}></Route>
                <Route path='/verificarpeso' element={<VerificarPeso />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;