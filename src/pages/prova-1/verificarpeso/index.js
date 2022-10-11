import { useState } from 'react'
import { Link } from 'react-router-dom';
import './index.scss'

export default function CalcularPeso() {

    const [peso,setPeso] = useState (0);
    const [resul,setResul] = useState (0);

    const Calcular = () => {
        let  valor = peso * 3.50;

        if ( valor >= 1000){
        setResul(Math.round(peso * 3.00))
        }

        if (peso <= 0){
            console.log('peso invalido')
        }
        setResul(valor / 100)
    }

    return (
        <div className='box-principal'>
            <div className='box-2'>
                <h2> Calcular preço </h2>
                <label> insira o peso </label>
                <input type='number'  onChange = {(e) => setPeso(e.target.value)} />
                <button onClick={Calcular}>
                    Calcular
                </button>
                <p>total:</p>
                {resul} 
                <Link to= '/'>voltar </Link>
            </div>
        </div>
    )
}