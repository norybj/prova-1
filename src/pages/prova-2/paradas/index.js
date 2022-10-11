import './index.scss'
import { useState } from 'react'


export default function Paradas(){

    const [capac,setCapac] = useState('');
    const [consumo,setConsumo] = useState('');
    const [dist,setDist] = useState('');
    const [mensagem, setMensagem] = useState('');

    function calcularParadas(capac, consumo, dist){
        let calc= dist / consumo / capac;  
        return Math.ceil(calc);
    }

    function calcularClick() {
        const calc = calcularParadas(capac, consumo, dist, mensagem)
        setMensagem(calc)
    }


    return(
        <section>
            <div className='box-principal' >
                <div className='box-2'>
                    <h2> CALCULAR PARADAS </h2>
                    <label> tanque: </label>
                    <input type='number' value={capac} onChange={e => Number (setCapac(e.target.value))}/>
                    <label> consumo: </label>
                    <input type='number' value={consumo} onChange={e => Number (setConsumo(e.target.value))}/>
                    <label> distancia: </label>
                    <input type='number' value={dist} onChange={e => Number (setDist(e.target.value))}/>

                    <button onClick ={calcularClick}> Calcular </button>
                    <div>
                    <span> Você precisará fazer {mensagem} paradas para abastecer. </span>
                    </div>
                </div>
            </div>
        </section>
    )
}