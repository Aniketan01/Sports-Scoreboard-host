import './App.css'
import Navbar from './components/Navbar'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Cricket from "./pages/Cricket"
import Home from './pages/Home'
import Basketball from './pages/Basketball'
import Baseball from './pages/Baseball'
import Rugby from './pages/Rugby'
import Football from './pages/Football'
import Signup from './pages/Signup'
import Login from './pages/Login'

function App() {


  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/cricket" element={<Cricket/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/football" element={<Football/>}/>
      <Route path="/basketball" element={<Basketball/>}/>
      <Route path="/baseball" element={<Baseball/>}/>
      <Route path="/rugby" element={<Rugby/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
