import React from "react";
import Card from 'react-bootstrap/Card';
// import Car from '../image/car.jpg'
import '../App.css';

const OlxCard = (data)=>{

    
    return(
    <Card style={{ width: '18rem', margin: '10px 10px' }}>
      <Card.Img className='img-size' variant="top" src={data.img} />
      <Card.Body className='data-body'>

        <Card.Title className='font-title'>{data.title}</Card.Title>
        <Card.Text className='font-pricing'>
          {data.price}
        </Card.Text>
        <p className='font-size'>{data.location}<span><span> . </span>{data.time}</span> </p>
      </Card.Body>
    </Card>
    )
}

export default OlxCard;