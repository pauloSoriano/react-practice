import React from "react";
import logo from "../../logo.svg";
import "./Main.css";

function Main(){
    return (
        <header className="Main-header">
            <img src={logo} className="Main-logo" alt="logo" data-testid="logo" />
            <p>
                Edit src/App.tsx and save to reload.
            </p>
            <a
                className="Main-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    );
}

export default Main;