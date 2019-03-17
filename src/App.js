import React, { Component } from 'react';
import {BrowserRouter, Link} from 'react-router-dom'
import './App.css';
import {Router} from "react-router";
import Header from "./components/Header";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
    }
}

export default App;
