import React from "react";
import Home from "./Home";
import Student from "./Student";
import About from "./About";
//import User from "./User";
import "./Style.css"

import "./App.css"

import { Routes,Route, BrowserRouter, NavLink} from "react-router-dom";




function RouteCompo(){
    return(
        <>

        <BrowserRouter >
        <div className='nav'>
        <NavLink style={({isActive})=>({color: isActive ? "green" : "red"})} to='/'>Home</NavLink>
        <NavLink style={({isActive})=>({color: isActive ? "green" : "red"})} to='/Student'>Student</NavLink>
        <NavLink style={({isActive})=>({color: isActive ? "green" : "red"})} to='/About'>About</NavLink>
        </div>

        <Routes>
            <Route path='/' element={ <Home/>}/>
            <Route path='/Student' element={ <Student/>}/>
            <Route  path='/About' element={ <About/>}/>
            {/* <Route  path='/User/:id' element={ <User/>}/> */}


        </Routes>
        </BrowserRouter>
        
        </>
    )
}

export default RouteCompo