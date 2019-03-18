import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <MainContainer />
                <Footer/>
            </div>
        );
    }
}

export default App;
