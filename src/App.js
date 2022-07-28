import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const[mode,setMode]=useState('light');
  const togglemode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#343a40'
      showAlert("dark mode is enabbled","success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("light mode is enabbled","success");
    }
  }

  const [alert, setalert] = useState(null)
  const showAlert=(message,type)=>{
    setalert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1000);
  }
  
  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils" about="About" myMode={mode} togglemode={togglemode}/>   {/* sending props or I can say values */}
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About myMode={mode} />} /> {/* this means if someone goes on /about path show the About component */}
          <Route exact path="/" element={<TextForm showAlert={showAlert}myMode={mode}/>} />
      </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}
export default App;
