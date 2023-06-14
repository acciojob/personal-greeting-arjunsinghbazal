import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const [value,setvalue]=useState("");
  const [current,setcurrent]=useState(false);
  const update=(e)=>{
    setcurrent(true);
    setvalue(e.target.value);
  }
  return (
    <>
      <p>Enter your name:</p>
      <input type="text" onChange={update}/>
      {current?<p>Hello {value}!</p>:null}
    </>
  )
}


export default App;