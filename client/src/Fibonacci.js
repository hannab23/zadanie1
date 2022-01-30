import React, { Component } from "react";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { useState } from 'react';

class Fibonacci extends Component {

    constructor() {
        super();
        this.state = {

        };
        this.handleChange = this.handleChange.bind(this);
    }

    fibonacci(element) {
        console.log(element);
        var x = 1;
        var y = 0;
        var temp;
        while(element > 0) {
          temp = x;
          x = x + y;
          y = temp;
          element--;
        }
        return y;
    }

    handleChange (event) {
        // const name = event.target.name;
        // const value = event.target.value;
        // setInput(values => ({...values, [name]: value}))
        // this.setInput({input: this.state.input: value})
        console.log(event.target.name);
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state);
    }

    render() {

        // function fibonacci(element) {
        //     console.log(element);
        //     var x = 1;
        //     var y = 0;
        //     var temp;
        //     while(element > 0) {
        //       temp = x;
        //       x = x + y;
        //       y = temp;
        //       element--;
        //     }
        //     return y;
        // }

        // const [input, setInput] = useState("");

        // this.state = {};

        // const handleChange = (event) => {
        //     // const name = event.target.name;
        //     // const value = event.target.value;
        //     // setInput(values => ({...values, [name]: value}))
        //     // this.setInput({input: this.state.input: value})
        //     console.log(event.target.name);
        //     console.log(event.target.value);
        //     this.setState({
        //         [event.target.name]: event.target.value
        //     });
        //     console.log(this.state);
        // }

        return(
            <header className="App-header">
                <p>
                <h1>Fibonacci</h1>
                </p>
                <p>
                Ktory element ciagu Fibonacciego chcesz wyswietlic?
                </p>
                <input 
                    type="number" 
                    name="element"
                    min="0"
                    max="20"
                    size="5"
                    fontSize="30px"
                    defaultValue="0"
                    onChange={this.handleChange}
                    />
                <p>
                Element nr {this.state.element} ma wartosc: {this.fibonacci(this.state.element)}
                </p>
            </header>
        );
    }
}

export default Fibonacci;