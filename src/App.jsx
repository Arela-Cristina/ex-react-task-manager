import { BrowserRouter, Routes, Route } from "react-router";
import taskContext from './global-context/TaskGlobalContext'
import Index from "./DefaultLayout";
import AddTask from "./pages/AddTask";
import TaskList from './pages/TaskList';
import TaskDetail from './pages/TaskDetail'
import useTasks from "./custom Hooks/useTasks";


function App() {


  const taskData = useTasks()

  return (

    <taskContext.Provider value={{ ...taskData }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}>
            <Route path="addTask" element={<AddTask />} />
            <Route path="taskList" element={<TaskList />} />
            <Route path="/task/:id" element={<TaskDetail />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </taskContext.Provider>

  )
}

export default App
