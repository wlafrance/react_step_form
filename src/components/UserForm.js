import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: '',
        isFocused: false
    }
    
    // Proceed to next step
    nextStep = () => {
       
        const { step } = this.state;  // Destructing 
        this.setState({
            step: step + 1
        });
    }
    // Previous step
    prevStep = () => {
        const { step } = this.state;  // Destructing 
        this.setState({
            step: step - 1
        });
    }
    // Handle Fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }


    // Handle Focus change
    handleFocus = input => e => {
        this.setState({ isFocused: true });
    }
    

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio } = this.state;

        const values = { firstName, lastName, email, occupation, city, bio };

        switch (step) {
            case 1:
                return (
                <FormUserDetails
                    nextStep={this.nextStep}
                    handleFocus = {this.handleFocus}
                    handleChange={this.handleChange}
                    values={values}
                />
                )
            case 2:
                return <h1>FormPersonalDetails</h1>
            //return 
            //{  
            //    <FormUserDetails 
            //    prevStep = {this.prevStep}
            //    nextStep = {this.nextStep}
            //    handleChange = {this.handleChange}
            //    values={values}
            //    />
            //}
            case 3:
                return <h1>Confirm</h1>
            case 4:
                return <h1>Success</h1>

        }
    }
}

export default UserForm
