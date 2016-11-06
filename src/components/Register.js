import React from 'react'
import {Well, Form, FormGroup,FormControl,ControlLabel,HelpBlock} from 'react-bootstrap'

export default class Register extends React.Component{
	
	render(){
		const wellStyle={
			width: 500,
			height: 'auto',
			marginLeft: 'auto',
			marginRight: 'auto',
			marginTop: 100
		};
		return(
			<div className="container">
				<Well style={wellStyle}>
					<Form>
						<h1> Sign Up! </h1>

				        <FormGroup>
				        	<ControlLabel>First Name: </ControlLabel>
				        		<FormControl type="text" name="firstname" 
				                       placeholder="Enter your first name"/>
				        		<FormControl.Feedback/>
				        	<HelpBlock></HelpBlock>
				        </FormGroup>

				        <FormGroup>
				        	<ControlLabel>Last Name:</ControlLabel>
				        		<FormControl type="text" name="lastName"
				        				placeholder="Enter your last name"/>
				        		<FormControl.Feedback/>
				        	<HelpBlock></HelpBlock>	
				        </FormGroup>

					</Form>
				</Well>
			</div>
		);
	}
}