
import './App.css'
import Home from './Pages/Home/Home'
import Footer from './Components/Common/Footer/Footer'
import Clients from './Pages/ClientPage/Clients';
import Enterprise from './Pages/Enterprise/Enterprise'
import About from './Pages/About/About';
import Login from './Components/Auth/Login/Login'
import Register from './Components/Auth/register/Register';
function App() {
  return (
    <div className="App">

     {/* <Home /> */}
     {/* <Footer /> */}
     {/* <Enterprise /> */}
     {/* <About /> */}
     {/* <Login /> */}
     <Register/>
    </div>
  );
}

export default App;
