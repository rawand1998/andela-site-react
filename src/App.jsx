import {  Routes, Route } from "react-router-dom";
import React , {Suspense} from 'react'
import "./App.css";
import Router from "./routes/Router";
import Navbar from "./Components/Common/NavBar/Navbar";
function App() {
  return (
  
      <Suspense fallback={<p>loading...</p>}>
      <Navbar/>
      <Routes>
        {Router.routes.map((route, Index) => (
          <Route path={route.path} element={route.element} key={Index} />
        ))}
      </Routes>
   
    </Suspense>

  );
}

export default App;
