import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
    this.props.handleFocus();
  };
  render() {
    const { values, handleChange, handleFocus } = this.props;
    const {isFocused} = this.props;
   
    return (
      <MuiThemeProvider>
        <AppBar title="Enter User Details" />
        <React.Fragment>
          <TextField
            id="firstName"
            hintText="Enter First Name"
            floatingLabelText="First Name"
            onBlur = {handleChange("firstName")}
            onFocus = {handleFocus("firstName")}
            style={(this.isFocused) ? {fontStyle: 'bold', color: 'yellow'} : {fontStyle: 'italic', color: 'red'}}
          />
          <br />
          <TextField
            id="lastName"
            hintText="Enter Last Name"
            floatingLabelText="Last Name"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            id="email"
            hintText="Enter email"
            floatingLabelText="email"
            onChange={handleChange("email")}
            defaultValue={values.email}
          />
          <br />
          <RaisedButton
            onClick={this.continue}
            label="Continue"
            primary={true}
            style={StyleSheet.button}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  },
  input: {
    background:'red'
  }
};

export default FormUserDetails;
