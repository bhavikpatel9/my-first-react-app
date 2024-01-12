// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import React,{useState} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './components/About';


function App() {

  const [mode, setMode] = useState("light");

  const toggleMode = ()=>{
    if(mode==="light"){
      setMode('dark')
      document.body.style.background = '#2C3333';
    }
    else{
      setMode('light')
      document.body.style.background = 'white';
    }
  }
  return (

    <BrowserRouter>
      <Routes>
      
        <Route path='/' element={<Navbar title="Textutils" about="About textutils" mode={mode}  toggleMode={toggleMode}/>} >

            <Route index element={<div className="container">
              <Form heading="Enter text below to analyze" mode={mode} />
              </div>}/>
            <Route path='/about' element={<About mode={mode} />}/>
        </Route>
        
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
