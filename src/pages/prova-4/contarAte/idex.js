import './index.scss'
import { useState } from 'react'


export default function RepetirNumero() {
    const [numeroinicial,setNumeroinicial] = useState ('');
    const [numerofinal,setNumerofinal] = useState ('');
    const [result,setResult] = useState ('');

    function Comecar() {
        
        if(isNaN(numeroinicial) || isNaN(numerofinal)) throw Error('isso nao é um numero')
        for (let cont = numeroinicial; cont < numerofinal; cont++){
            result = console.log(cont);
        }        

    }


    return(
        <main className='box-principal'>
            <div className='box-2'>
                <h2>Repetir numero</h2>
                <label>informe um numero inicial</label>
                <input type  value={numeroinicial} onChange={e => (setNumeroinicial(e.target.value))}/>
                <label>informe um numero final</label>
                <input type="number" value={numerofinal} onChange={e => (setNumerofinal(e.target.value))}/>
                <button onClick={Comecar}>Começar</button>
                <p>{setResult}</p>
            </div>
        </main>
    )
}