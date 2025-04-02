import { useState, useEffect } from "react";

const BASE_API = import.meta.env.VITE_API_URL;

function useTasks() {

    const [tasks, setTask] = useState([])

    async function fetchData() {
        try {
            const response = await fetch(`${BASE_API}/tasks`);
            const data = await response.json();
            setTask(data)
            console.log('ladata', data)

        } catch (error) {
            console.error(`error fetching taks.`, error)
        }
    }


    // funzioni
    async function addTask(newTask) {
        console.log("Debuging:", newTask);

        const response = await fetch(`${BASE_API}/tasks`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTask),
        });

        const { success, message, task } = await response.json();

        if (!success) throw new Error(message || 'Error nella API');

        setTask((prevTasks) => [...prevTasks, task]);

    }

    async function removeTask(deletedTaskId) {
        // console.log("id task:", deletedTaskId);

        const response = await fetch(`${BASE_API}/tasks/${deletedTaskId}`, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" },
        });

        const { success, message } = await response.json();

        if (!success) throw new Error(message || 'task non cancellata')

        setTask(prevTasks => prevTasks.filter(task => task.id !== deletedTaskId));
    }


    async function correctTask(updatedTask) {
        console.log("id update task:", updatedTask);
        const response = await fetch(`${BASE_API}/tasks/${updatedTask.id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedTask),
        });

        const { success, message, task } = await response.json();

        if (!success) throw new Error(message || 'task  non aggiornata')

        setTask(prevTasks => prevTasks.map(
            oldTask => oldTask.id === task.id ? task : oldTask
        ))


    }





    useEffect(() => {
        fetchData()
    }, [])

    return { tasks, addTask, removeTask, correctTask }
}

export default useTasks