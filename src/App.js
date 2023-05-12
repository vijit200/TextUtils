import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useState} from 'react';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

 

// import About from './components/About';
import './App.css';
function App() {
  const [darkMode,setDarkMode] = useState("light")
  const [modeName,setModeName] = useState("Enable dark mode")
  const [alert,setAlert] = useState(null)
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(()=>{
      setAlert(null)
    },2000)
  }
  const toggleMode = ()=>{
    if(darkMode==="light"){
      setDarkMode("dark")
      setModeName("Disable dark mode")
      showAlert("Dark mode enabels","success")
      document.body.style.backgroundColor = "#022453"
    }
    else{
      setDarkMode("light")
      setModeName("Enable dark mode")
      showAlert("Light mode enabels","success")
      document.body.style.backgroundColor = "white"
    }
  }
  return (
    
    <>
    <Router>
      <Navbar title="TextUtils" aboutText ="About Us" mode={darkMode} toggleMode = {toggleMode} modeName = {modeName} />
      
      <div className="container">
      <Alert alert={alert}/>
        </div>
      

      


      <Switch>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/">
            <div className="container">
            {<TextForm heading="Enter text here to analyse" mode={darkMode}/>}
            </div>
            
          </Route>
        </Switch>


      </Router>
      

      {/* <About/> */}

      

    </>
  );
}

export default App;
