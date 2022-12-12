import { React } from 'react';
import { Container } from 'react-bootstrap';

const Result = ({price}) => {

  return (
    <Container>
    {price && price.map(({current_price, id, high_24h, low_24h, image, name})=>(
      <div className='result'>
      <div>
        <div style={{ fontSize:"25px"}} key ={id}>Current price: {current_price.toFixed(2)}</div>
        <div  style={{ fontSize:"18px", marginTop:"10px"}} key={high_24h}>Highest today: {high_24h.toFixed(2)}</div>
        <div  style={{ fontSize:"18px", marginTop:"10px"}} key ={low_24h}>Lowest today: {low_24h.toFixed(2)}</div>
        </div>
        <div>
        <img src={image} alt={name} className="cryptoimg" key ={image} />
        </div>
        </div>
    )) }
    </Container>
    )
  
}

export default Result