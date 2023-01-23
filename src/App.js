import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import {Switch,Routes} from 'react-router';

// let name="Adeeb Khan";

function App() {
  // State of Mode
  const[mode,setMode]=useState('light');   //Whether dark mode is enabled or not
  const[enableText,setEnableText]=useState('Enable Dark Mode')

  // State of Alert
  const [alert,setAlert]=useState(null);


  // Method for setAlert
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      setEnableText('Enable Light Mode');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
      document.title='Textutils - Dark Mode';



      // For Bright Title 
      // setInterval(() => {
      //   document.title='Textutils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title='Install Textutils Now';
      // }, 1500);


    }
    else{
      setMode('light');
      setEnableText('Enable Dark Mode')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title='Textutils - Light Mode'
    }
  }
  return (
  <>
    {/* <Navbar></Navbar> */}
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
     {/* <Navbar /> */}


    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} enableText={enableText}/>
    <Alert alert={alert} />
    <div className="container my-3">
    <Switch>
      
      {/* /users --->Component1
          /users/home ---->Component2 */}

      <Route exact path="/about">
        <About />
      </Route>  

      <Route exact path="/">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
      </Route>
    </Switch>

      {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> */}
      {/* <About /> */}
    </div>
    </Router>
  </>
  );
}

export default App;
