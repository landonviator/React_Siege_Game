import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

class AdvanceTurn  extends Component {
    render() { 
        return (
            <React.Fragment>
                <Button onClick={this.props.onAdvanceTurn} variant="primary">Next Turn</Button>
            </React.Fragment>
        );
    }
}
 
export default AdvanceTurn;