
import './App.css'
import {useState, useEffect} from "react"
import Home from "./components/Home"
import Login from "./components/Login"
import {BrowserRouter, Routes, Route} from "react-router-dom"
function App() {
  // const [bg, setBg] = useState("light");

  // const changeBg = () => {
  //   setBg(bg === "light" ? "dark" : "light");
  // };

  // useEffect(() => {
  //   if (bg === "light") {
  //     document.body.style.backgroundColor = "white";
  //   } else {
  //     document.body.style.backgroundColor = "#121212";
  //   }
  // }, [bg]);

  return (
    <>
    {/* <button
        onClick={changeBg}
        style={{ position: "absolute", top: 10, left: 10 }}
      >
        Change Background
      </button> */}
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
       </Routes>
    </BrowserRouter>
    </>
   


    
    
  )
}

export default App
