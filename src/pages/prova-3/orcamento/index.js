import './index.scss'
import { useState } from 'react'


export default function Orcamento() {

    const [ganhos,setGanhos] = useState('');
    const [gastos,setGastos] = useState('');
    
    function sitOrcamento (ganhos,gastos){

        if(ganhos>gastos){
            
        }
    }
    

    return(
        <section>
            <div>
                <h2>Calcular orçamento familiar</h2>
                <label>Ganhos</label>
                <input type="number" value={ganhos} onChange={e => Number (setGanhos(e.target.value))}/>
                <label>Gastos</label>
                <input type='number' value={gastos} onChange={e => Number (setGastos(e.target.value))}/>

                <button>Calcular</button>
            </div>
        </section>
    )
}