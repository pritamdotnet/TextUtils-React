import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light'); // whether dark mode is enable or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')

  }
  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#070f63'
      showAlert("Dark mode has been enabled","success")
    // document.title ='Textutils-Dark Mode';
    
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled","success")
    // document.title ='Textutils-Light Mode';
    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
        <div className='container my-3'>
        <Routes>
            <Route exact path="/about" element={<About mode={mode} />}  />
            <Route exact path="/" element={
              <TextForm showAlert={showAlert} heading='Try TextUtils: - Word Counter, Charactor Counter,Remove extra spaces' mode={mode} />
              } />
          </Routes>
        </div>
        </Router>
    </>
  );
}

export default App;
