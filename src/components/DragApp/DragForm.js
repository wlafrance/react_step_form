import React, { Component } from "react";

export default class DragForm extends Component {
  state = {
    step: 1,
    firstName: "",
    middleName: "",
    lastName: "",
    persona: "",
    primaryEmail: "",
    personaEmail: "",
    mobilePhone: "",
    personaBio: "",
    personarate: ""
  };

  // Next
  nextStep = () => {
    //Get the step number from the state via decontruction
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Previous
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle when a form field is changed.
  // This is done via the form field event 
  // In Javascript, when you create an object literal {} 
  // and you wrap the object’s key in array brackets [key] 
  // you can dynamically set that key.
  
  handleChange = (input) => e =>{
      //https://medium.com/@bretdoucette/understanding-this-setstate-name-value-a5ef7b4ea2b4
      this.setState({[input]:e.target.value});
  }
  render() {
    return <div />;
  }
}
