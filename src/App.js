import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Home from './Components/Home/Home';


function App() {
  const getToken = localStorage.getItem("token")
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='signup' element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
