import "./App.css";
import Navbar from "./components/Navbar";
import Basketball from "./pages/Basketball";
import Cricket from "./pages/Cricket"
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Football from "./pages/Football";
import Rugby from "./pages/Rugby";
import Baseball from "./pages/Baseball";
import Home from "./components/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cricket" element={<Cricket/>}/>
          <Route path="/football" element={<Football/>}/>
          <Route path="/basketball" element={<Basketball/>}/>
          <Route path="/rugby" element={<Rugby/>}/>
          <Route path="/baseball" element={<Baseball/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
