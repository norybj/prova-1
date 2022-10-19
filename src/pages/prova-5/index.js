import './index.scss'
import { useState } from 'react'

export default function Cafe(){
    const [numero,setNumero] = useState('');
    const [litros,setLitros] = useState('');



    return(
        <section>
            <div>
                <label> NUMERO DE ESTUDANTE </label>
                <input type='number'/>
                <label> QNT DE LITROS </label>
                <input type='number'/>
                <label> QNT DE MILILITROS </label>
                <input type='number'/> 
            </div>
        </section>
    )
}