import React, { Component } from 'react';
import './App.css';
import VitalitySpriteOne from './components/vitalitySpriteOne';
import MonsterOnePoisonCounter from './components/m1PoisonCounters';
import MonsterOneDeath from './components/monsterOneDeath';
import AdvanceTurn from './components/advanceTurn';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


class App extends Component {

  state = {
    vitality: 6,
    poison: 0,
    isDead: false
};

vitalityDecrement = () => {
  this.setState({vitality: this.state.vitality > 0 ? this.state.vitality -= 1 : this.state.vitality = 0});
  this.setState({isDead: this.state.vitality < 1 ? this.state.isDead = true : this.state.isDead = false});
};

vitalityIncrement = () => {
  this.setState({vitality: this.state.vitality += 1});
  this.setState({isDead: this.state.vitality < 1 ? this.state.isDead = true : this.state.isDead = false});
};

poisonDecrement = () => {
  this.setState({poison: this.state.poison > 0 ? this.state.poison -= 1 : this.state.poison = 0});
};

poisonIncrement = () => {
  this.setState({poison: this.state.poison += 1});
};

advanceTurn = () => {
  this.setState({
    vitality: this.state.poison > 0 ? this.state.vitality -= 1 : this.state.vitality -= 0,
    poison: this.state.poison > 0 ? this.state.poison -= 1 : this.state.poison = 0,
    isDead: this.state.vitality < 1 ? this.state.isDead = true : this.state.isDead = false
  });
};

  render(){
  return (
    <div id="root" className="App">
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img 
        alt=""
        src={require('./LittleMonster-01.png')}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Monster Siege Counter
    </Navbar.Brand>
  </Navbar>
  <Row>
    <Col></Col>
    <Col xs={12} sm={12} md={8} lg={5}>
  <Card bg="dark" text="white" style={cardStyle}>
    <Card.Img variant="top" src={require('./LittleMonster-01.png')} />
    <Card.Body>
      <Card.Title style={titleStyle}>Sprite</Card.Title>
      <Card.Text>
        Although the smallest monsters, sprites are no pushover. Like pawns in chess, they can be deadly 
        when utilized properly.
      </Card.Text>

    <VitalitySpriteOne 
      onVitalityDecrement={this.vitalityDecrement}
      onVitalityIncrement={this.vitalityIncrement}
      vitality={this.state.vitality}
    ></VitalitySpriteOne>

    <div style={statsStyle}>
    <MonsterOnePoisonCounter 
    poison={this.state.poison}
      onPoisonDecrement={this.poisonDecrement}
      onPoisonIncrement={this.poisonIncrement}>
    </MonsterOnePoisonCounter>
    </div>

    <Row style={statsStyle}>
      <Col>
      <h5 style={statsStyle}>Status: <MonsterOneDeath onCheckDeathForSpinner={this.checkDeathForSpinner}
      vitality={this.state.vitality} poison={this.state.poison} isDead={this.state.isDead} onAdvanceTurn={this.advanceTurn} 
      ></MonsterOneDeath></h5>
      </Col>
      <Col></Col>
      <Col>
        <AdvanceTurn vitality={this.state.vitality} 
        poison={this.state.poison} isDead={this.state.isDead} onAdvanceTurn={this.advanceTurn}
        ></AdvanceTurn>
      </Col>
    </Row>

    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </Col>
  <Col></Col>
  </Row>
    </div>
  );
}
}

const cardStyle ={
  marginTop: '10px',
  marginLeft: '24px',
  marginRight: '24px'
}

const vitalityPlusButton = {
  marginLeft: '10px'
}

const titleStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItem: 'center'
}

const statsStyle = {
  marginTop: '8px'
}

export default App;
