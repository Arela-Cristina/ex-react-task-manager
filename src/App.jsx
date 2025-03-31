import { BrowserRouter, Routes, Route } from "react-router";
import Index from "./Index";
import AddTask from "./pages/AddTask";
import TaskList from './pages/TaskList'



function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route path="addTask" element={<AddTask />} />
          <Route path="taskList" element={<TaskList />} />
        </Route>
      </Routes>
    </BrowserRouter >


  )
}

export default App
