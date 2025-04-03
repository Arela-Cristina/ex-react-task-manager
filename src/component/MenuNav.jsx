import { NavLink } from "react-router";
import style from './MenuNav.module.css';

export default function Index() {
    return (
        <section className={style.kawaiiContainer}>
            <NavLink
                to="/addTask"
                className={({ isActive }) => `${style.kawaiiButton} ${isActive ? "active" : ""}`}
            >
                 Add Task 
            </NavLink>

            <NavLink
                to="/taskList"
                className={({ isActive }) => `${style.kawaiiButton} ${isActive ? "active" : ""}`}
            >
                 Task List 
            </NavLink>
        </section>
    );
}