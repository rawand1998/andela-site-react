import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Clients from "./Pages/ClientPage/Clients";
import Enterprise from "./Pages/Enterprise/Enterprise";
import About from "./Pages/About/About";
import Login from "./Components/Auth/Login/Login";
import Register from "./Components/Auth/register/Register";
import FindWork from "./Pages/FindWorkPage/FindWork";
import Navbar from "./Components/Common/NavBar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="clients" element={<Clients />} />
          <Route path="enterprise" element={<Enterprise />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="findWork" element={<FindWork />} />
          {/* error 404 "*" */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
