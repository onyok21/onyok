import React, { Component } from 'react';
import {Well,
        Form,
        FormGroup,
        ControlLabel,
        FormControl,
        HelpBlock,
        Button,
        ButtonGroup } from 'react-bootstrap';
import './App.css';

class App extends Component {

  gotoHome(){
    this.props.history.push("/home");
  }
  gotoRegister(){
    this.props.history.push("register");
  }

  render() {

    const wellStyle={
      width: 400,
      Height: 700,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 100
    };

    const btncontainer={
      marginLeft: 220
    };

    return (

      <div className="container">
        <Well style={wellStyle}>
          <legend> Onyok </legend>
            <Form>
              <FormGroup>
                <ControlLabel>UserName</ControlLabel>
                  <FormControl type="text" placeholder="UserName" />
                  <FormControl.Feedback />
                    <HelpBlock></HelpBlock>
              </FormGroup>

              <FormGroup>
                <ControlLabel>Password</ControlLabel>
                  <FormControl type="password" placeholder="password" />
                  <FormControl.Feedback />
                    <HelpBlock></HelpBlock>
              </FormGroup> 

              <ButtonGroup style={btncontainer}>
                <Button bsStyle="info" type="button" onClick={this.gotoRegister.bind(this)}> Register </Button>
                <Button bsStyle="success" type="button" onClick={this.gotoHome.bind(this)}> LogIn </Button>
              </ButtonGroup>  

            </Form>
        </Well>
      </div>  
    );
  }
}

export default App;
