
import React,{ useState } from 'react';
// import { Routes } from "react-router-dom";
import './App.css';
// import About from './Components/About';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light")
  const [alert, setalert] = useState(null)

  const showAlert=(message,type)=>{
   setalert({
          msg:message,
          type:type
   })
   setTimeout(() => {
    setalert(null);
   }, 1500); 
  }

  const removeExtraClasses=()=>{
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-dark')
  }
 const toggleMode = (clr)=>{
      removeExtraClasses();
      // document.body.classList.add('bg-', clr);
      if(mode ==='light'){
        setmode('dark')
        document.body.style.backgroundColor = '#216375'
        showAlert("Dark mode has been enable","Success");
      }
      else{
        setmode('light')
         document.body.style.backgroundColor = 'white'
         showAlert("light mode has been enable","Success");
      }
  }
  return (
    <>
   <Navbar textHeading="TextChanger" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <Form heading="Enter text into below box" mode={mode} showAlert={showAlert} />
   {/* <About /> */}
    {/* <Router>
        <Routes>
          <Route exact path="/" element={<Form heading="Enter text into below box" mode={mode} showAlert={showAlert} />}></Route>
          <Route exact path="/about" element={<About />}></Route>       
        </Routes>
    </Router> */}
  
    </>
  );
}

export default App;
