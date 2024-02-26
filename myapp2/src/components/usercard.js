import React from"react"
import { useContext } from "react";

import { myContext } from "../App";

const Button = () => {

   const data=useContext(myContext);

      return (
        
        <>
        <div style={{backgroundColor:data.color}}>
          <h1>i ambutton my name is{data.name}</h1>
        </div>
        </>
        
      )
};

export default Button;