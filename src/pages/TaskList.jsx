import style from './TaskList.module.css'

export default function TaskList() {

    return (

        <section className={style.customTaskList}>
            <div className={style.titleTaskList}>Tasks</div>
            <ul>
                <li>da fare</li>
                <li>da fare</li>
                <li>da fare</li>
                <li>da fare</li>
            </ul>
        </section>

    )

}