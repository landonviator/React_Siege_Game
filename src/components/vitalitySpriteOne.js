import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

class VitalitySpriteOne  extends Component {
    render() { 
        return (
            <React.Fragment>
                <Row>
                <Col><Button onClick={this.props.onVitalityDecrement} variant="danger">Vitality - 1</Button></Col>
                <Col><Button onClick={this.props.onVitalityIncrement} variant="success">Vitality + 1</Button></Col>  
                <Col><Button variant="outline-light">
                Vitality: <Badge variant="light">{this.props.vitality}</Badge>
                </Button></Col>
                </Row>
            </React.Fragment>
        );
    }
}
 
export default VitalitySpriteOne;