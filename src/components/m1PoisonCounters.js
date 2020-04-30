import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

class MonsterOnePoisonCounter  extends Component {
    render() { 
        return (
            <React.Fragment>
                <Row>
                <Col><Button onClick={this.props.onPoisonDecrement} variant="info">Poison - 1</Button></Col>
                <Col><Button onClick={this.props.onPoisonIncrement} variant="info">Poison + 1</Button></Col>  
                <Col><Button variant="outline-light">
                Poison: <Badge variant="light">{this.props.poison}</Badge>
                </Button></Col>
                </Row>
            </React.Fragment>
        );
    }
}
 
export default MonsterOnePoisonCounter;