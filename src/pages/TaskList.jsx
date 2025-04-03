import style from './TaskList.module.css'
import { useContext, useState, useMemo } from 'react'
import taskContext from '../global-context/TaskGlobalContext'
import TaskRow from '../component/TaskRow'



export default function TaskList() {

    const { tasks } = useContext(taskContext)
    console.log('ecco mi', tasks)

    // filtro di ricerca
    const [searchQuery, setSearchQuery] = useState('')
    console.log('query', searchQuery)

    const [sortBy, setSortBy] = useState('createdAt')

    const [sortOrder, setSortOrder] = useState(1)

    function handleSortClick(field) {

        if (sortBy === field) {
            setSortOrder(prev => (prev * -1))
        } else {
            setSortBy(field)
            setSortOrder(1)
        }
    }

    const sortArrowIcon = sortOrder === 1 ? '🠉' : '🠋';

    // memo per memorizzare il compito di una funzione, ameno che le loro prop cambiano, per assicurare la fluidezza del nostro programmino
    const sortTasks = useMemo(() => {


        return [...tasks]
            .filter(task => task.title.toLowerCase().includes(searchQuery.toLowerCase()))
            .sort((a, b) => {
                let order;

                switch (sortBy) {
                    case "title":
                        let titleA = a.title.toLowerCase();
                        let titleB = b.title.toLowerCase();
                        order = titleA.localeCompare(titleB);
                        return order * sortOrder;

                    case "status":
                        const statusValues = ["To do", "Doing", "Done"];
                        const statoA = statusValues.indexOf(a.status);
                        const statoB = statusValues.indexOf(b.status);
                        order = statoA - statoB;
                        return order * sortOrder;

                    case "createdAt":
                        const dateA = new Date(a.createdAt).getTime();
                        const dateB = new Date(b.createdAt).getTime();
                        order = dateA - dateB;
                        return order * sortOrder;

                    default:
                        return 0;
                }
            });

    }, [tasks, sortBy, sortOrder, searchQuery])



    return (
        <>
            <input
                type="search"
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value) }}
            />

            {!tasks || tasks.length === 0 ? (<p>Cercando tasks ...</p>)


                : (

                    <section className={style.customTaskList}>
                        <div className={style.headerRow}>
                            <div
                                className={style.column}
                                onClick={() => handleSortClick("title")}>
                                Nome {sortBy === 'title' && sortArrowIcon}
                            </div>


                            <div
                                className={style.column}
                                onClick={() => handleSortClick("status")}>
                                Stato {sortBy === 'status' && sortArrowIcon}
                            </div>


                            <div
                                className={style.column}
                                onClick={() => handleSortClick("createdAt")}>
                                Data di Creazione{sortBy === 'createdAt' && sortArrowIcon}
                            </div>


                        </div>
                        <ul>
                            {sortTasks.map(task => (
                                <TaskRow key={task.id} task={task} />
                            ))}
                        </ul>
                    </section>
                )}
        </>
    )
}