import React, {Component} from 'react';
import './app.css';

import AppHeader from '../app-header';
import SearchPanel from '../search-penal';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';

export default class App extends Component {

    state = {
        todosData: [
            {label: 'Drink Coffee', important: false, id: 1 },
            {label: 'Make Awesome App', important: true, id: 2 },
            {label: 'Have a lunch', important: false, id: 3 }
        ]
    };

    deleteItem = ({todoData}) => {
        this.setState = ( (id) => {

            const idx = todoData.findIndex( (el) => el.id === id);

            const newArray = [
                ... todoData.slice(0, idx),
                ... todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            };
        });
    };

    render() {

        return (
            <div className="content">
                <AppHeader toDo={1} done={3} />
                <div className="search-penal">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList 
                    todos={this.state.todosData}
                    onDeleted={ this.deleteItem } />
            </div>
        );

    };

};


