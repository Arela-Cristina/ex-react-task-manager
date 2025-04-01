import style from './TaskList.module.css'
import { useContext } from 'react'
import taskContext from '../global-context/TaskGlobalContext'
import TaskRow from '../component/TaskRow'



export default function TaskList() {

    const { tasks } = useContext(taskContext)
    // console.log('ecco mi', tasks)

    return (
        <>
            {!tasks || tasks.length === 0 ? (<p>Cercando tasks ...</p>)


                : (

                    <section className={style.customTaskList}>
                        <div className={style.headerRow}>
                            <div className={style.column}>Nome</div>
                            <div className={style.column}>Stato</div>
                            <div className={style.column}>Data di Creazione</div>
                        </div>
                        <ul>
                            {tasks.map(task => (
                                <TaskRow key={task.id} task={task} />
                            ))}
                        </ul>
                    </section>
                )}
        </>
    )
}