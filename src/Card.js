import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Second(props) {
  return (
    <Card style={{ width: '18rem' , backgroundColor:"yellow"  , height:"600px"}}>
      <Card.Img variant="top" src={props.picture} style={{height:"60%"}} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          it is really a good movie , i'm not ready to make the props of description to each movie and you know i understand props uses
        </Card.Text>
        <Button variant="primary" style={{backgroundColor:"black"}}>Buy tickets</Button>
      </Card.Body>
    </Card>
  );
}

export default Second;