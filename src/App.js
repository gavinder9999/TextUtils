
import About from './About';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  

  const toggleMode = ()=>{
    if(Mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor ='#100f60';
      showAlert("dark mode has been enabled","success");
      // document.title = "TextUtils - Dark Mode";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor ='white';
      showAlert("light mode has been enabled","success");
      // document.title = "TextUtils - light Mode";
    }
  }
  return (
<>
  <Router>
    <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    {/* <Navbar/> */}
    <div className="container my-3">
       <Switch>
          <Route exact path="/about">
            <About mode={Mode} />
          </Route>
          
          <Route exact  path="/">
            <TextForm showAlert={showAlert} heading ="Word counter character counter Text counter Remove extra spaces" mode={Mode} />
          </Route>
        </Switch>
      </div>
   </Router>

</>

  );
}

export default App;
