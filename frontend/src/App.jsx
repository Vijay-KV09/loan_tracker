import './App.css'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes,Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
       <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/login" exact element={<Login/>} />
          <Route path="/register" exact element={<Register/>} />
          <Route path="/dashboard" exact element={<Dashboard/>} />
       </Routes>
    </>
  )
}

export default App
