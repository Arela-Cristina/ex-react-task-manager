import { useState, useRef } from "react"

export default function AddTask() {



    const [name, setName] = useState('')
    console.log('name', name)

    const descrizioneRef = useRef()

    return (

        <form action="">

            <div>
                <div>Nome del task </div>
                <input
                    name='name'
                    type="text"
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                />
            </div>

            <div>
                <div>Descrizione</div>
                <input
                    name='descrizione'
                    type="text"
                    ref={descrizioneRef}
                    onChange={(e) => { e.target.descrizioneRef }}
                />
            </div>

            <div>
                <div>Stato</div>
                <select name="" id="">
                    <option value={null}>Selezziona stato</option>
                    <option value="toDo">To Do</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                </select>
            </div>



        </form>



    )

}