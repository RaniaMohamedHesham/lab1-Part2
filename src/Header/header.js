import { useState } from "react";
import img from '../img/Pict.jpg'
import './header.css'
export default function Header() {
            
return(
<>
   <img src={require('./Pict.jpg')} width="100%" height="10%"></img>
    <div className="container">
    <h1>Rania Hesham</h1>
    <h3>Web Developer</h3>
    <button className="btn btn-primary">Contact Me</button>
    </div>
    </>
)


}