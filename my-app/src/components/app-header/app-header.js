import React, { Component } from 'react';
import './app-header.css';  

export default class AppHeader extends Component {

    render() {

        const { toDo, done } = this.props;
        
        return ( 
            <div className="app-header d-flex">
                <h1>Todo List</h1>
                <h2>{toDo} more to do, {done}</h2>
            </div>  
        );

    };

};
