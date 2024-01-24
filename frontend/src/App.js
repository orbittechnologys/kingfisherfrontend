// import logo from './logo.svg';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
// import Billing from "./components/Billing";
import Login from "./components/Login";
import Signup from "./components/Signup.jsx";
import Billing from "./components/Billing.jsx";
import History from "./components/History.jsx";
import Adminresetpass from "./components/Adminresetpass.jsx";
import Adminotp from "./components/Adminotp.jsx";
import AdminVerify from "./components/AdminVerify.jsx";
import { useEffect, useState } from "react";

function App() {

  const initialLoginStatus = localStorage.getItem('isLoggedIn') === 'true';
  const [isLoggedIn, setIsLoggedIn] = useState(initialLoginStatus)

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn)
  }, [isLoggedIn])

  return (
    <div className="App">

      {/* <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>

          <Route path="/history" element={<History/>}/>
          <Route path="/billing" element={<Billing/>}/>
          <Route path="/adminresetpass" element={<Adminresetpass/>}/>
          <Route path="/adminotp" element={<Adminotp/>}/>
          <Route path="/adminverify" element={<AdminVerify/>}/>
        </Routes>
      </Router> */}


      <Router>
      <Routes>
        <Route path='/' element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path='/*' element={isLoggedIn ? (

          
            
           
              <Routes>

          <Route path="/history" element={<History/>}/>
          <Route path="/billing" element={<Billing/>}/>
          <Route path="/adminresetpass" element={<Adminresetpass/>}/>
          <Route path="/adminotp" element={<Adminotp/>}/>
          <Route path="/adminverify" element={<AdminVerify/>}/>

              </Routes>
            

          
        ) :(
          <Login setIsLoggedIn={setIsLoggedIn} />
        )
      } />

    

    

        </Routes>
    </Router>
     
    </div>
  );
}

export default App;
