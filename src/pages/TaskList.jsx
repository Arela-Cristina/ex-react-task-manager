import style from './TaskList.module.css'
import { useContext } from 'react'
import taskContext from '../global-context/TaskGlobalContext'



export default function TaskList() {

    const task = useContext(taskContext)

    return (

        <section className={style.customTaskList}>
    <div className={style.headerRow}>
        <div className={style.column}>Nome</div>
        <div className={style.column}>Stato</div>
        <div className={style.column}>Data di Creazione</div>
    </div>
    <ul>
        <li className={style.row}>
            <div className={style.column}>Una tarea con un nombre super largo que podría desbordar</div>
            <div className={style.column}>Fatto</div>
            <div className={style.column}>13/11/1995</div>
        </li>
        <li className={style.row}>
            <div className={style.column}>Otra tarea</div>
            <div className={style.column}>In corso</div>
            <div className={style.column}>20/05/2024</div>
        </li>
    </ul>
</section>

    )

}