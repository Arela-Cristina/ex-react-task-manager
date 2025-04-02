import { useState, useRef } from 'react'
import Modal from './Modal'

export default function EditTaskModal({

    show = false,
    onClose = () => { },
    task = {},
    onSave = () => { },
}) {

    const [updatedTask, setUpdateTask] = useState(task)

    const formRef = useRef()

    function changeUpdatedTask(key, event) {
        setUpdateTask(prev => ({ ...prev, [key]: event.target.value }))
    }


    function handleSubmit(e) {
        e.preventDefault()
        onSave(updatedTask)
    }

    const { title, description, status } = updatedTask

    return (

        <Modal
            title='Modifica Task'
            content={
                <form ref={formRef} onSubmit={handleSubmit}>
                    <div>
                        <div>Nome Task</div>
                        <input
                            type="text"
                            value={title}
                            onChange={event => changeUpdatedTask('title', event)}
                        />
                    </div>

                    <div>
                        <div>Description</div>
                        <textarea
                            value={description}
                            onChange={event => changeUpdatedTask('description', event)}
                        />
                    </div>

                    <div>
                        <div>Stato</div>
                        <select

                            value={status}
                            onChange={event => changeUpdatedTask('status', event)}
                        >
                            {['To do', 'Doing', 'Done'].map((value, index) => (
                                <option value={value} key={index}>{value}</option>
                            ))}
                        </select>
                    </div>

                </form>
            }
            confirmText='Salva'
            show={show}
            onClose={onClose}
            onConfirm={() => formRef.current.requestSubmit()}
        />
    )

}