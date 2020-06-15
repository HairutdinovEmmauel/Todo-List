import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {

    state = {
        value: ''
    };

    onChange = (e) => {
        const value = e.target.value;   
        this.setState({ value });
        this.props.onSearchChange(value);
    }

    render() {

        return (
            <form >
                <input id="searchValue" 
                    className="search form-control" 
                    placeholder="search" 
                    value={this.state.value}
                    onChange={this.onChange}
                />
            </form>
        );

    }
};


