import React, { Component } from "react";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class Main extends Component {

    render() {
        return(
            <header className="App-header">
                <p>
                    <h1>Home</h1>
                </p>
                <p>Realizacja zadania nr 1 w ramach laboratorium PFSwChO</p>
                <p>Hanna Boguta</p>
                <Link to="/fibonacci">Fibonacci</Link>
                <Link to="/documentation">Dokumentacja</Link>
            </header>
        );
    }

}

export default Main;