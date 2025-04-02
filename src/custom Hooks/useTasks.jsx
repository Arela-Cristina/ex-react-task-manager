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

    function removeTask() {
        console.log('removeTask')
    }

    function updateTask() {
        console.log('updateTask')
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { tasks, addTask, removeTask, updateTask }
}

export default useTasks