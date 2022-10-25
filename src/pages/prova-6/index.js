import './index.scss'
import { useState } from 'react'


export default function CalcularAluno(){
    const [qtdaluno,setQtdaluno] = useState ('')
    const aluno = []; 


    function Ok(){
        let array = []
        for (let i = 0; i <= setQtdaluno; i++){
            return aluno;
        }
        
    }
    

    return(
        <section className='box-principal'>
            <div className='box-2'>
                <h1>CALCULAR NOTA</h1>
                <div>
                <label>qtd de aluno: </label>
                <input type='text' value={qtdaluno} onChange={e =>  Number (setQtdaluno(e.target.value))} />
                <button>ok</button>
                </div>
                <div className="users">
                    {aluno.map((user) => (
                    <div className="user"> 
                    aluno {user} : <input type='text' />
                    </div>
                ))}
    </div>
            </div>
        </section>
    )
}