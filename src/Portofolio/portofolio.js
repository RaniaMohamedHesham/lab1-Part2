import { useState } from "react";
import Card from 'react-bootstrap/Card';

export default function Portofolio(props) {

return(
   <>
   
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.Img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
      </Card.Body>
    </Card>
    
   </>
)
}