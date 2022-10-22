import './App.css';
import Home from './Components/Pages/Home/Home';
import Header from './Components/Sheared/Header/Header';
import {Routes,Route} from 'react-router-dom'
import Appoinment from './Components/Pages/Appoinment/Appoinment';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Login/Register';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Components/Sheared/RequireAuth';
import About from './Components/Pages/About/About';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/appointment' element={<RequireAuth><Appoinment></Appoinment></RequireAuth>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <ToastContainer />
      
    </div>
  );
}

export default App;
