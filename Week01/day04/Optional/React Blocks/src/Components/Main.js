import React, { Component } from 'react';
import "./Main.css";

class Main extends Component {
    render() {
        return <article className="main">{this.props.children}</article>;
    }
}
    
export default Main;