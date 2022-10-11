import { useState } from 'react'
import { Link } from 'react-router-dom';
import './index.scss'


export default function CalcularAcai() {
const [acaiPequeno, setAcaiPequeno] = useState(0);
const [acaiMedio, setAcaiMedio] = useState(0);
const [acaiGrande, setAcaiGrande] = useState(0);
const [desconto,setDesconto] = useState(0);
const [resultado, setResultado] = useState('---');



function Calcular() {
    setAcaiPequeno(acaiPequeno * 13.50);
    setAcaiMedio(acaiMedio * 15.00);
    setAcaiGrande(acaiGrande * 17.50);
    let soma = acaiPequeno + acaiMedio + acaiGrande;
    setResultado(soma = soma * desconto/100);
}

    return(
        <div className='box-principal'>
            <div className='box-2'>
                <h1>Calcular Açai</h1>
                <h4>quantidade de pequeno</h4>
                <input input type='text' value={acaiPequeno} onChange={e =>Number (setAcaiPequeno(e.target.value))}></input>

                <h4>quantidade de medio</h4>
                <input input type='text' value={acaiMedio} onChange={e =>Number (setAcaiMedio(e.target.value))}></input>

                <h4>quantidade de grande</h4>
                        <input input type='text' value={acaiGrande} onChange={e =>Number (setAcaiGrande(e.target.value))}></input>

                <h4>Cupon de Desconto</h4>
                <input input type='text' value={desconto} onChange={e =>Number (setDesconto(e.target.value))}></input>

                <button onClick={Calcular}>CALCULAR</button>
                <p>{resultado}</p>
            </div>
                <div className='box'>
                    <h1>navegar</h1>
                <Link to= '/verificarsigno'>Signo</Link>
                <Link to= '/verificarpeso'>Peso</Link>
                <Link to= '/salarioLiquido'> salario Liquido </Link>
                <Link to= '/temperatura'>Temperatura</Link>
                <Link to= '/paradas'></Link>
                </div>
        </div>
    )
}
