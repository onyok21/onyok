import React from 'react'
import {Well,
        Form,
        FormGroup,
        ControlLabel,
        FormControl,
        HelpBlock,
        Button,
        ButtonToolbar} from 'react-bootstrap'


export default class Register extends React.Component{

    render(){

        const wellstyle={
            width: 400,
            height: 500,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 50
        };

        return(

            <div className="container">
                <Well style={wellstyle}>
                    <legend>REGISTRATION FORM</legend>
                        <Form>

                            <FormGroup>
                                <ControlLabel>User Name:</ControlLabel>
                                    <FormControl type="text" placeholder="UserName" />
                                    <FormControl.Feedback/>
                                        <HelpBlock></HelpBlock>
                            </FormGroup>

                            <FormGroup>
                                <ControlLabel>Password:</ControlLabel>
                                    <FormControl type="password" placeholder="password" />
                                    <FormControl.Feedback/>
                                        <HelpBlock></HelpBlock>
                            </FormGroup>

                            <FormGroup>
                                <ControlLabel>Email:</ControlLabel>
                                    <FormControl type="text" placeholder="Email" />
                                    <FormControl.Feedback/>
                                        <HelpBlock></HelpBlock>
                            </FormGroup>

                            <ButtonToolbar>
                                <Button bsStyle="warning" type="submit">Submit</Button>
                            </ButtonToolbar>

                        </Form>
                </Well>
            </div>    
        );
    }
}