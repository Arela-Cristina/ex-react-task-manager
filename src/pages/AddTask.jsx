import { useState, useRef } from "react"

export default function AddTask() {



    const [name, setName] = useState('')
    // console.log('name', name)

    const descriptionRef = useRef();

    const stateRef = useRef(null)
    console.log('stato', stateRef)

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
                    ref={descriptionRef}
                    onChange={(e) => { e.target.descriptionRef }}
                />
            </div>

            <div>
                <div>Stato</div>
                <select
                    name="state"
                    id="state"
                    ref={stateRef}
                    onChange={() => { console.log(stateRef.current.value) }}>

                    <option value='null'>Selezziona stato</option>
                    <option value="toDo">To Do</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                </select>
            </div>



        </form>



    )

}