import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Car from './image/car.jpg'
import Bike from './image/bike.jpg'
import Phone from './image/iphone.jpg'
import Room from './image/drawingRoom.jpg'
import './App.css';
import OlxCard from './Components/card'
 

function App() {
  return (
<div style={{display:'flex' , margin: '50px auto'}}>
    <OlxCard title="aquos R3 mobile 6/128" price="Rs 18,000" location="Buffer Zone 1, Karachi" time="1 minute ago" img={Car} />
    <OlxCard title="moto one 5g 4gb/128gb Single Sim PTA approved USA stock" price="Rs 28,000" location="North Karachi, Karachi" time="5 hours ago" img={Phone} />
    <OlxCard title="4 Bed room house for sale" price="Rs 33,000" location="Libarty Chowk, Lahore" time="30 minute ago" img={Room} />
    <OlxCard title="New CD-70 for sale" price="Rs 50,000" location="Khushab Road, Sargodha" time="2 days ago" img={Bike} />
    </div>

    // <Card style={{ width: '18rem', margin: '10px 10px' }}>
    //   <Card.Img className='img-size' variant="top" src={Car} />
    //   <Card.Body className='data-body'>

    //     <Card.Title className='font-title' title>aquos R3 mobile 6/128</Card.Title>
    //     <Card.Text className='font-pricing'>
    //       Rs 18,000
    //     </Card.Text>
    //     <p className='font-size'>Buffer Zone 1, Karachi <span>1 minute ago</span> </p>
    //   </Card.Body>
    // </Card>
  );
}

export default App;