import { useParams, useNavigate } from "react-router";
import { useContext, useState } from "react"
import taskContext from "../global-context/TaskGlobalContext"
import Modal from "../component/Modal";


export default function TaskDetail() {

    const [showModal, setShowModal] = useState(false)

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
            <button onClick={() => setShowModal(true)}>Elimina Task

            </button>

            <Modal
                title='Modale di Conferma'
                content={'Sicuro che vuoi eliminare questa task?'}
                show={showModal}
                onClose={() => { setShowModal(false) }}
                onConfirm={handleClick}
                confirmText='Elimina'
            />

        </section>
    )
}


