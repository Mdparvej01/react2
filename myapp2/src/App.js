// import logo from './logo.svg';
// import './App.css';
import React from"react";
import { createContext } from "react";
import { useState } from "react";
// import ReactDOM from 'react-dom/client';
import Button from "./components/usercard";
import Navbar from "./components/navbar";
import Button2 from "./components/button";

export const myContext=createContext();



function App() {

    const [name,setName]=useState("");
    const [color,setColor]=useState("");

    
const myName=(event) => {
    setName(event.target.value);
 };
 
 const myColor=(event) => {
     setColor(event.target.value);
  };


 return (
  <myContext.Provider value={{name,color}}>
  <Navbar/>
  <Button2/>
  <input type="text" placeholder="enter name"  value={name} onChange={myName}/>
    <input type="text" placeholder="enter color"  value={color} onChange={myColor}/>
  <Button/>

  </myContext.Provider>
 )
}

export default App;
