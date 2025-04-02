import { useParams } from "react-router";
import { useContext } from "react"
import taskContext from "../global-context/TaskGlobalContext"

export default function TaskDetail() {

    const { id } = useParams();
    const { tasks } = useContext(taskContext)

    console.log('task Details', tasks)

    // cerchiamo la task che corresponde con il id richiesto
    const task = tasks.find(task => task.id === parseInt(id))

    if (!task) {
        return 'Task non trovata, sorry'
    }

    return (
        <section>


            <h2>Nome: {task.title}</h2>
            <div>Descrizione: {task.description}</div>
            <div>Stato: {task.status}</div>
            <div>Data di Creazione: {task.createdAt}</div>
            <button onClick={() => console.log(`Elimina tasks, ${task.id}`)}>Elimina Task</button>

        </section>
    )
}


