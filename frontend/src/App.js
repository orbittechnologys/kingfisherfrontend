// import logo from './logo.svg';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
// import Billing from "./components/Billing";
import Login from "./components/Login";
import Signup from "./components/Signup.jsx";

function App() {
  return (
    <div className="App">
      <Signup></Signup>
      {/* <Billing></Billing> */}
    </div>
  );
}

export default App;
