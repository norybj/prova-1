import { useState } from "react";

import './index.scss'


export default function Index(){
    const [temperatura,setTemperatura] = useState();
    const [resposta,setResposta] = useState ();

  function calcularTemperatura(){
    const febr = Febre(temperatura);
    setResposta(febr ); 
  }

    function Febre (temperatura){
    let msg = '';

   if (temperatura >= 41)
    msg = 'Hipertermia';

   else if (temperatura >= 39.6 && temperatura < 41)
    msg = 'Febre Alta'

    else if(temperatura >= 37.6 && temperatura < 39.6)
    msg = 'Febre'

   else if (temperatura >= 36 && temperatura < 37.6)
    msg = 'Normal'

   else if (temperatura < 36)
    msg = 'Hipotermia'

    return msg;
}

  return(
    <main className='box-principal'>
        <div className='box-2'>    
            <h3>CALCULAR TEMPERATURA</h3>
            <div>
                <p>Verificar Temperatura</p>
                <input type='number' value={temperatura} onChange={e => setTemperatura(e.target.value)} />

                <button onClick={calcularTemperatura}>Verificar</button>

                <div>
                    <span>A Situação Para Sua Temperatura é{resposta}</span>
                </div>
            </div>
        </div>
    </main>
  )
}

