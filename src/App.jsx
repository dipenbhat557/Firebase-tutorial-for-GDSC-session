import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signin from "./components/Signin"
import Signup from "./components/Signup"
import CreateTodo from "./components/CreateTodo"
import GetTodo from "./components/GetTodo"
import UpdateTodo from "./components/UpdateTodo"
import DeleteTodo from "./components/DeleteTodo"
import HomePage from "./components/HomePage"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/todo/create" element={<CreateTodo/>}/>
        <Route path="/todo/get" element={<GetTodo/>}/>
        <Route path="/todo/update" element={<UpdateTodo/>}/>
        <Route path="/todo/delete" element={<DeleteTodo/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
