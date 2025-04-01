import style from './TaskRow.module.css';

export default function ({ task }) {

    return (

        <li className={style.row} key={task.id}>
            <div className={style.column}> {task.title} </div>
            <div className={style.column}> {task.status} </div>
            <div className={style.column}> {task.createdAt} </div>
        </li>
    )
}