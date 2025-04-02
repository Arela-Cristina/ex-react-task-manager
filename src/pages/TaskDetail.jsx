import { useParams, useNavigate } from "react-router";
import { useContext } from "react"
import taskContext from "../global-context/TaskGlobalContext"


export default function TaskDetail() {

    const navigate = useNavigate()

    const { removeTask } = useContext(taskContext)

    const { id } = useParams(); //ritorna una stringa
    const { tasks } = useContext(taskContext)

    console.log('task Details', tasks)

    // cerchiamo la task che corresponde con il id richiesto
    const task = tasks.find(task => task.id === parseInt(id))

    if (!task) {
        return 'Task non trovata, sorry'
    }


    async function handleClick() {

        try {
            await removeTask(task.id)
            navigate('/taskList')
            alert('Taks Eliminata con Sucesso')

        } catch (error) {
            alert('Errore ricevuto')
        }
    }


    return (
        <section>

            <h2>Nome: {task.title}</h2>
            <div>Descrizione: {task.description}</div>
            <div>Stato: {task.status}</div>
            <div>Data di Creazione: {task.createdAt}</div>
            <button onClick={handleClick}>Elimina Task

            </button>

        </section>
    )
}


