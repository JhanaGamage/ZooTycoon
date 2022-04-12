import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import '../.dist/output.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

ReactDOM.render( 
    <BrowserRouter>     
       <Routes>
            <Route path="/" element={<App />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
       </Routes>
    </BrowserRouter>
   ,document.getElementById('root'));