import './index.scss'

import { useState } from "react"

export default function FormarLinha(){

    const [ qtdPontos, setQtdPontos ] = useState(0)
    const [ resultado, setResultado ] = useState([])

    function linhas(qtdPontos){
        let array = []
    
        for(let i = 0; i < qtdPontos; i++){ 
            let asterisco = '*'
            array.push( `${asterisco}`);
        }
    
        return array;
    }
    
    console.log(linhas(5))

    async function montarLinha(){
        const r = await linhas(qtdPontos)
        setResultado(r)
    }


    return(
        <section className='box-principal'>
            
            <div className='box-2'> 
             <h1 >Fazer Linhas</h1>
                <div>
                    <label>Informe o tamanho da linha:</label>
                     <input 
                        type="number" 
                        value={qtdPontos}
                        onChange={e => setQtdPontos(e.target.value)}/> 
                </div>
                <div>
                    <div>
                        <button onClick={montarLinha}>Calcular</button> 
                    </div>

                    <div>
                        {resultado}
                    </div>
                </div>
            </div>

        </section>
    )
 }