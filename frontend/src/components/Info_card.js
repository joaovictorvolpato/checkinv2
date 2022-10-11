import React from "react";
import { Container, Card, ListGroup, Button } from "react-bootstrap";



const Info_card = (props) => {
    const riskColor = () => {
            let risk = props.info['contamination']
            if (risk <= 3) {
                return 'success'
            } else if (risk <= 6) {
                return 'warning'
            } else {
                return 'danger'
            }
    }
  return (
    <Container style ={{display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignContent: 'center',
                        flexWrap: 'wrap',
                        marginTop: '10%',
                        fontSize: '1.15rem',
                        }}>

    <Card className="text-center" style = {{borderWidth: '0.3rem',
                                            borderRadius: '1.2rem'}}
        border = {riskColor()} >
      <Card.Header>Personal Information</Card.Header>
      <Card.Body>
        <Card.Title>Risk of Contamination(1 to 10)</Card.Title>
        <Card.Text style = {{fontSize: '2rem'}}>{props.info['contamination']}</Card.Text>
        <Card.Text>
        <ListGroup>
        <ListGroup.Item >Email: {props.info['email']}</ListGroup.Item>
        <ListGroup.Item>Password: {props.info['password']}</ListGroup.Item>
        <ListGroup.Item>Os: {props.info['os']}</ListGroup.Item>
        <ListGroup.Item>Os_version: {props.info['os_version']}</ListGroup.Item>
        </ListGroup>
        </Card.Text >
      
      </Card.Body>
      <Card.Footer className="text-muted">{props.info['lastCheck']}</Card.Footer>
    </Card></Container>
  );
};

export default Info_card;
