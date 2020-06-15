import React, {Component} from 'react';
import './add-list-item.css';

export default class AddListItem extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddItem(this.state.label);
        this.setState({
            label: ''
        })
    };

    

    render() {
        
        return (
            <form className="search-add-todo-list" onSubmit={this.onSubmit}>
                <input type="text"
                className="form-control"
                onChange={this.onLabelChange}
                placeholder="add todo list" 
                value={this.state.label}/>
                    <input type="submit" value="Add" />
            </form>
        )

    }


};




