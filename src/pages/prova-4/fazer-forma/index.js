import './index.scss'

import { useState } from 'react'


export default function Formato(){

    const [ base, setBase ] = useState(0)
    const [ colunas, setColunas ] = useState(0)
    const [ resultado, setResultado ] = useState([])

    async function Forma(){
        const r = await criarRetangulo(base, colunas)
        setResultado(r)
    }

    function criarRetangulo(base, altura){

        let array = []
    
        for(let col = 1; col <= altura ; col++)
        {
    
            for (let lin = 1; lin <= base; lin++)
            {
                array.push('* ')
            }
    
            array.push(<br></br>)
        }   
    
        return array
    }
    
    
    
    console.log(Forma(3,5));

    return(
        <section>

            <h1 className='box-principal'>Teste2</h1>
            <div className='box-2'>  
                <div>
                    <label>Informe a quantidades de linhas:</label>
                    <input
                        type="number"
                        value={base}
                        onChange={e => setBase(e.target.value)}/>
                </div>

                <div>
                    <label>Informe a quantidades de colunas:</label>
                    <input 
                        type="number"
                        value={colunas}
                        onChange={e => setColunas(e.target.value)}/>
                </div>

                <div>
                    <div>
                        <button className='butao-calc-salario' onClick={Forma}>Formar</button> 
                    </div>

                <div >
                    {resultado}
                </div>

                </div>
            </div>

        </section>
    )
}