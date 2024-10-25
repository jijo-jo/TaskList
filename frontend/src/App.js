import './App.css';
import {BrowserRouter,Routes, Route}  from "react-router-dom"
import SignIn from './Components/SignInPage/SignIn';
import TaskPage from './Components/TaskPage/TaskPage';
import CreateNewTask from './Components/TaskPage/CreateTask';
import EditTasks from './Components/TaskPage/EditTasks';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
          <Route exact path='/' element={<SignIn/>}/>
          <Route exact path='/tasks' element={<TaskPage/>}/>
          <Route exact path='/createtask' element={<CreateNewTask/>}/>
          <Route exact path ='/edittask/:id' element={<EditTasks/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
