import './index.scss'
import { useState } from 'react'


export default function Salario(){

    const [salario, setSalario] = useState(0)
    const [bonus, setBonus] = useState(0)
    const [desc, setDesc] = useState(0)
    const [mensagem, setMensagem] = useState(0)

    function calcularClick() {
        const valorfinal = calcularSalario(salario, bonus, desc, mensagem)
        setMensagem(valorfinal)
    }

    function calcularSalario(salario, bonus, desc){

        const calcularSalario =   (salario - desc) + ((bonus/100) * salario);
        return calcularSalario;
       }

    return(
        <main className='box-principal'>
            <div className='box-2'>
                <h1> SALARIO LIQUIDO </h1>
                <div className='input'>
                    <label>Salário</label>
                    <input type='number' value={salario} onChange={e => Number (setSalario(e.target.value))}></input>
                </div>
                <div className='input'>
                    <label>Bônus</label>
                    <input type='number' value={bonus} onChange={e => Number (setBonus(e.target.value))}></input>
                </div>
                <div className='input'>
                    <label>Desconto</label>
                    <input type='number' value={desc} onChange ={e => Number (setDesc(e.target.value))}></input>
                </div>
                <button onClick ={calcularClick}> Calcular </button>
                <div>
                <span> O Seu Salario Liquido é de R$ {mensagem} </span>
                </div>
            </div>
        </main>
    )
}