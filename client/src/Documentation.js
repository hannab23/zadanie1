import React, { Component } from "react";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import architecture from './architecture.png';

class Documentation extends Component {

    render() {
        return(
            <header className="App-header">
                <h1>Dokumentacja</h1>
                <p>
                    Aplikacja bazuje na przylkadzie z laboratorium 9.
                </p>
                <p>
                    <h2>Dokonano zmian:</h2>
                    <ul>
                        <li>dodano plik docker-compose.dev.yml</li>
                    </ul>
                    client:
                    <ul>
                        <li>dodano potrzebne strony (Main, Documentation)</li>
                        <li>dodano zdjecie architektury</li>
                        <li>zaimplementowano router w pliku App.js</li>
                    </ul>

                    server:
                    <ul>
                        <li>w pliku index.js dodano ograniczenie wspolczynnika ciagu k do 20</li>
                    </ul>

                    worker:
                    <ul>
                        <li>zmieniono implementacje funkcji obliczajacej ciag fibonacciego w pliku index.js</li>
                    </ul>
                </p>

                <img src={architecture} alt="architektura"></img>
            </header>
        );
    }

}

export default Documentation;