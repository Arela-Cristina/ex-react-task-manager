import { useState, useRef } from "react"
import style from './AddTask.module.css'

export default function AddTask() {

    const [name, setName] = useState('')
    console.log(name)
    const [controlName, setControlName] = useState(true)
    const descriptionRef = useRef(null);
    const stateRef = useRef(null)


    function handleNameChange(e) {
        let newName = e.target.value;

        if (!newName.trim()) {
            setControlName(false);
            console.log('Campo vuoto');
        }

        const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", "\\", ",", ".", "<", ">", "?", "/", "`", "~"];

        if (symbols.some(char => newName.includes(char))) {
            setControlName(false);
            console.log('Non accetta Simboli');
            return;
        }

        setControlName(true);
        setName(newName);
    }

    function handleSubmit(e) {
        e.preventDefault()

        console.log('oggetto',
            {
                name: name,
                description: descriptionRef.current.value,
                stato: stateRef.current.value

            }
        )

    }

    return (
        <>
            <h2>Planner</h2>

            <form onSubmit={handleSubmit}>

                <div>
                    <div>Nome del task </div>
                    <input
                        name='name'
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                    />
                    {(!controlName) ? (
                        <p className={style.textError}>Non può contenere simboli speciali.</p>
                    )
                        : (
                            <p className={style.textCorrect}>Nome del task puo includere numeri</p>

                        )}
                </div>



                <div>
                    <div>Descrizione</div>
                    <input
                        name='descrizione'
                        type="text"
                        ref={descriptionRef}

                    />
                </div>

                <div>
                    <div>Stato</div>
                    <select
                        name="state"
                        id="state"
                        ref={stateRef}>


                        <option value='null'>Selezziona stato</option>
                        <option value="toDo">To Do</option>
                        <option value="doing">Doing</option>
                        <option value="done">Done</option>
                    </select>
                </div>

                <button type='submit'> Aggiungi</button>


            </form >

        </>

    )

}