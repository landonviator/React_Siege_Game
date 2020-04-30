import React, { Component } from 'react';
import Spinner from 'react-bootstrap/Spinner';

class MonsterOneDeath extends Component {
    render() { 

        return ( 
            <React.Fragment>
                <Spinner animation="grow" variant={this.props.isDead ? "danger" : "success"} />
            </React.Fragment>
         );
    }
}
 
export default MonsterOneDeath;