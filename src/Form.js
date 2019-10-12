import React, { Component } from 'react';

class Form extends Component {
//We're going to set the initial state of the Form to be an object with some empty properties, and assign that initial state to this.state.
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            job: '',
        }

        this.state = this.initialState
    }

        //First, we'll make the function that will run every time a change is made to an input. The event will be passed through, and we'll set the state of Form to have the name (key) and value of the inputs.
        handleChange = event => {
            const {name, value} = event.target;

            this.setState({
                [name]: value,
            });
        }

        //we'll create a method called submitForm() that will call that function, and pass the Form state through as the character parameter we defined earlier. It will also reset the state to the initial state, to clear the form after submit.
        submitForm = () => {
            this.props.handleSubmit(this.state)
            this.setState(this.initialState)
        }

    render() {
        const {name,job} = this.state;

        return (
            <form>
                <label>Name</label>
                <input 
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange} />
                    {/* when I inpect Chrome, on change, the value tag should automatically update to whatever gets entered into the input field*/}
                <label>Job</label>
                <input 
                    type="text"
                    name="job"
                    value={job}
                    onChange={this.handleChange} />
                    {/* when I inpect Chrome, on change, the value tag should automatically update to whatever gets entered into the input field*/}
                <input type="button" value="submit" onClick={this.submitForm} />
            </form>
        );
    }
}

export default Form;

