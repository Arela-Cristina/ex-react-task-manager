import { useParams, useNavigate } from "react-router";
import { useContext, useState } from "react"
import taskContext from "../global-context/TaskGlobalContext"
import Modal from "../component/Modal";
import EditTaskModal from "../component/EditTaskModal";


export default function TaskDetail() {

    const [showModal, setShowModal] = useState(false)
    const [showUpdateModal, setShowUpdateModal] = useState(false)

    const navigate = useNavigate()

    const { tasks, removeTask, correctTask } = useContext(taskContext)

    const { id } = useParams(); //ritorna una stringa


    console.log('task Details', tasks)

    // cerchiamo la task che corresponde con il id richiesto
    const task = tasks.find(task => task.id === parseInt(id))

    if (!task) {
        return 'Task non trovata, sorry'
    }


    async function handleClick() {

        try {

            await removeTask(task.id)
            navigate('/taskList');

        } catch (error) {
            alert(error.message)
        }
    }

    async function handleUpdate(updateTask) {
        try {

            await correctTask(updateTask)
            setShowUpdateModal(false)

        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <section>

            <h2>Nome: {task.title}</h2>
            <div>Descrizione: {task.description}</div>
            <div>Stato: {task.status}</div>
            <div>Data di Creazione: {new Date(task.createdAt).toLocaleDateString('it-IT')}</div>
            <button onClick={() => setShowModal(true)}>Elimina Task</button>
            <button onClick={() => setShowUpdateModal(true)}>Modifica Task</button>

            <Modal
                title='Modale di Conferma'
                content={'Sicuro che vuoi eliminare questa task?'}
                show={showModal}
                onClose={() => { setShowModal(false) }}
                onConfirm={handleClick}
                confirmText='Elimina'
            />

            <EditTaskModal
                task={task}
                show={showUpdateModal}
                onClose={() => { setShowUpdateModal(false) }}
                onSave={handleUpdate}
            />

        </section>
    )
}


