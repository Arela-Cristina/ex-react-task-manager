import { BrowserRouter, Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import taskContext from './global-context/TaskGlobalContext'
import Index from "./Index";
import AddTask from "./pages/AddTask";
import TaskList from './pages/TaskList'

const BASE_API = import.meta.env.VITE_API_URL;

function App() {


  const [task, setTask] = useState([])

  async function fetchTasks() {
    try {
      const response = await fetch(`${BASE_API}/tasks`);
      const data = await response.json();
      setTask(data)
      console.log('data:', data)
    } catch (error) {
      console.error(`error fetching taks.`, error)
    }
  }

  useEffect(() => {
    fetchTasks();
  }, [])

  return (
    
    <taskContext.Provider value={{ task, setTask }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}>
            <Route path="addTask" element={<AddTask />} />
            <Route path="taskList" element={<TaskList />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </taskContext.Provider>

  )
}

export default App
