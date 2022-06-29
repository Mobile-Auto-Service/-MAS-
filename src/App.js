import React from 'react';
import { GuestNavbar } from './components/Navbar';
import HomePage from './Pages/Homepage';
import Dashboard from './Pages/Dashboard';
import SignUp from './Pages/SignUp';
import LogIn from './Pages/LogIn';
import { BrowserRouter, Routes, Route,} from "react-router-dom"
import { Footer } from './components/footer';


const App = () => {
  return ( 
    <>
      <BrowserRouter>
       <GuestNavbar />
        <Routes>
         <Route path="/" element= {<HomePage/>}/>
          <Route path= "Dashboard" element = {<Dashboard/>}/>
          <Route path= "SignUp" element= {<SignUp/>}/>
          <Route path='LogIn' element= {<LogIn/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
     
    </>
    
        
  );
};


export default App;