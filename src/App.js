import React, { Component } from 'react';
import './App.css';
import VitalitySpriteOne from './components/vitalitySpriteOne';
import MonsterOneDeath from './components/monsterOneDeath';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';


class App extends Component {

  state = {
    vitality: 6,
    isDead: false
};

vitalityDecrement = () => {
  this.setState({vitality: this.state.vitality > 0 ? this.state.vitality -= 1 : this.state.vitality = 0});
  this.setState({isDead: this.state.vitality < 1 ? this.state.isDead = true : this.state.isDead = false});
  console.log(this.checkDeathForSpinner);
};

vitalityIncrement = () => {
  this.setState({vitality: this.state.vitality += 1});
  this.setState({isDead: this.state.vitality < 1 ? this.state.isDead = true : this.state.isDead = false});
  console.log(this.checkDeathForSpinner);
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
  <CardDeck>
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

      <h4 style={statsStyle}>Status: <MonsterOneDeath onCheckDeathForSpinner={this.checkDeathForSpinner}
      vitality={this.state.vitality} isDead={this.state.isDead}
      ></MonsterOneDeath></h4>

    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card bg="dark" text="white" style={cardStyle}>
    <Card.Img variant="top" src={require('./LittleMonster-01.png')} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card bg="dark" text="white" style={cardStyle}>
    <Card.Img variant="top" src={require('./LittleMonster-01.png')} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
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
