// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Alert from './components/Alert';
import React,{useState} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './components/About';


function App() {

  const [mode, setMode] = useState("light");
  const [alert,setAlert] = useState(null);

  const showAlert = (type,msg)=>{
        setAlert(
          {
            type : type,
            message : msg
          }
        )
        setTimeout(() => {
          setAlert(null);
        }, 1500);
  }

  const toggleMode = ()=>{
    if(mode==="light"){
      setMode('dark')
      document.body.style.background = '#2C3333';
      showAlert('success','dark mode is enabled');
    }
    else{
      setMode('light')
      document.body.style.background = 'white';
      showAlert('success','dark mode is disabled');
    }
  }
  return (

    <BrowserRouter>
      <Routes>
      
        <Route path='/' element={ 
                                    <div> <Navbar title="Textutils" about="About textutils" mode={mode}  toggleMode={toggleMode}/> </div>
                                } >
            
            <Route index element={<div> <Alert alert={alert}/>
                                     <div className='container'><Form heading="Try Textutils - Word counter, Character counter" mode={mode} showAlert={showAlert} /></div>
                                  </div>}/>
            <Route path='/about' element={<div className='container'><Alert alert={alert}/>  <About mode={mode} /></div>}/>
        </Route>
        
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
