import './index.scss'
import { useState } from 'react'


export default function Orcamento() {

    const [ganhos,setGanhos] = useState(0);
    const [gastos,setGastos] = useState(0);
    const [resultado,setResultado] = useState('');
    
    function sitOrcamento (){
        let porcentagem = (gastos/ganhos)* 100;

        if(gastos>ganhos){
            setResultado("Orcamento comprometido!Hora de rever seus gastos")
        }

        else if(porcentagem >= 81 && porcentagem <= 100 ) {
            setResultado("Cuidado,seu orcamento pode ficar comprometido!")
        }

        else if(porcentagem >= 51 && porcentagem <= 80){
            setResultado("Atencao,melhor conter do gastos!")
        }

        else if(porcentagem >= 21 && porcentagem <= 50){
            setResultado("Muito bem, seus gastos não ultrapassam metade dos gastos!")
        }

        else if(porcentagem >= 0 && porcentagem <= 20){
            setResultado("Parabens, esta gerenciando bem o seu orçamento")
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

                <button onClick={sitOrcamento}>Calcular</button>
                <p>{resultado}</p>
            </div>
        </section>
    )
}