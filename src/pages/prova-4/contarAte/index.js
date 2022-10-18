import './index.scss'
import { useState } from 'react'


export default function RepetirNumero() {
    const [numeroinicial,setNumeroinicial] = useState ('');
    const [numerofinal,setNumerofinal] = useState ('');
    const [result,setResult] = useState ('');

    function Comecar() {
        let array = [];        
        if(isNaN(numeroinicial) || isNaN(numerofinal)) throw Error('isso nao é um numero')
        
        for (let cont = numeroinicial; cont <= numerofinal; cont++){
            
            array.push(cont);
            setResult(array);
            
            for (let i = 0; i <= 1; i++){
                array.push(" ");
                setResult(array);
            }
        }           

    }


    return(
        <main className='box-principal'>
            <div className='box-2'>
                <h2>Repetir numero</h2>
                <label>informe um numero inicial</label>
                <input type="number" value={numeroinicial} onChange={e => Number (setNumeroinicial(e.target.value))}/>
                <label>informe um numero final</label>
                <input type="number" value={numerofinal} onChange={e => Number (setNumerofinal(e.target.value))}/>
                <button onClick={Comecar}>Começar</button>
                <p>{result}</p>
            </div>
        </main>
    )
}