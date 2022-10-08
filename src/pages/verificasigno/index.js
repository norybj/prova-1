import { useState } from 'react'
import { Link } from 'react-router-dom';
import './index.scss'

export default function Libra () {
    const [mes, setMes] = useState ('');
    const [dia, setDia] = useState (0);
    const [resultado, setResultado] = useState (false);
    
    const verificar = () => {
    
        let reposta = false
   
    if (dia <= 0 || mes == Number) {
    throw new Error('Dia ou mês inválido');
   }

    if (mes == "setembro" && dia >= 23 && dia <= 30 || 
        mes == "outubro" && dia >= 1 && dia <=22){
          
          reposta = true
    }
       setResultado(reposta)
  }

    return(
        <div className='box-principal'>
            <div className='box-2'>
                <h2> Verificar se é de libra </h2>
                <div className='box-3'>
                <label> insira o mes:</label>
                <input type="text" value={mes} onChange= {(e) => setMes(e.target.value)} />
                <label> insira o dia:</label>
                <input type="number" value={dia} onChange= {(e) => setDia(e.target.value)} />
                <button onClick={verificar}>
                    Verificar 
                </button>
                {resultado === true ? 'Signo é Libras? Sim' : 'Signo é Libras? Não'}
                </div>
                
                <Link to = '/'>Voltar</Link>
            </div>
        </div>
    )
}