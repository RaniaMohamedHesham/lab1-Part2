import { useState } from "react";
import './skills.css'
export default function Skills(props) {

  return(
  <>
      <br></br>
  <div className="progress">
  <div className="progress-bar progress-bar-success progress-bar-striped" role="progressbar"
  aria-valuenow={props.persentage} >
    {props.name} {props.persentage}
  </div>
</div>

    

  
  
  
  </>
  )


}