import { NavLink } from "react-router"


export default function Index() {

    return (
        <>

            <NavLink to='/addTask' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }> Add Task </NavLink>

            <NavLink to='/taskList'> Task List </NavLink>

        </>


    )

}