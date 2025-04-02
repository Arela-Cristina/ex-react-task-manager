import { useState, useRef, useContext } from "react"
import taskContext from "../global-context/TaskGlobalContext"
import style from './AddTask.module.css'

export default function AddTask() {

    const { addTask } = useContext(taskContext)

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

    async function handleSubmit(e) {
        e.preventDefault()
        if (!controlName)
            return;

        const newTask = {
            title: name.trim(),
            description: descriptionRef.current.value,
            status: stateRef.current.value
        }


        try {
            await addTask(newTask)
            alert('Task aggiunta con Succeso')
            setName('')
            descriptionRef.current.value = ''
            stateRef.current.value = ''

        } catch (error) {
            alert(error.message)

        }

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


                        <option value=''>Selezziona stato</option>
                        <option value="To do">To Do</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                    </select>
                </div>

                <button type='submit'> Aggiungi</button>

            </form >
        </>

    )

}