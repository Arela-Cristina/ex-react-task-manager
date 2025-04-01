import style from './TaskRow.module.css';
import React from 'react'



function TaskRow({ task }) {

    return (

        <li className={style.row} key={task.id}>
            <div className={style.column}> {task.title} </div>
            <div className={`${style.column}, ${getStatusClass(task.status)}`}> {task.status} </div>
            <div className={style.column}> {task.createdAt} </div>
        </li>
    )
}


export default React.memo(TaskRow)



// funzione per assegnare i colori dinamicamente
function getStatusClass(status) {
    switch (status) {
        case "To do":
            return style.toDo;
        case "Doing":
            return style.doing;
        case "Done":
            return style.done;
        default:
            return '';
    }
}