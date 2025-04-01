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

    function addTaks() {
        console.log('addTaks')
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

    return { tasks, addTaks, removeTask, updateTask }
}

export default useTasks