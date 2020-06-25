import React, {Component} from 'react';
import './app.css';

import AppHeader from '../app-header';
import SearchPanel from '../search-penal';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';
import AddListItem from '../add-list-item';

export default class App extends Component {

    maxId = 100;

    state = {
        todosData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
        ],
        value: '',
        filter: 'all' 
    };
 
    createTodoItem(label) {
        return {
            label,
            done: false, 
            important: false, 
            id: this.maxId++
        }
    };

    toggleProperty(arr, id, properName) {

        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];

        const newObj = {
            ... oldItem,
            [properName]: !oldItem[properName]
        };

        return [
            ... arr.slice(0, idx),
            newObj,
            ... arr.slice(idx + 1)
        ];

    };

    onToggleDone = (id) => {
        this.setState(({todosData}) => {

            return {
                todosData: this.toggleProperty(todosData, id, 'done')
            };

        });
    };

    onToggleImportant = (id) => {
        this.setState(({todosData}) => {

            return {
                todosData: this.toggleProperty(todosData, id, 'important')
            };

        });
    };  

    deleteItem = (id) => {
        this.setState(({ todosData }) => {

            const idx = todosData.findIndex((el) => el.id === id);

            const newArray = [
                ... todosData.slice(0, idx),
                ... todosData.slice(idx + 1)
            ];

            return {
                todosData: newArray
            };
        });
    };

    addItem = (value) => {
        this.setState(({todosData}) => {

            const newItem = this.createTodoItem(value)

            const newArr = [
                ... todosData,
                newItem
            ];

            return {
                todosData: newArr
            };

        });
    };

    onSearchChange = (value) => {
        this.setState({ value });
    }

    search(items, value ) {

        if (value.length === 0) {
            return items;
        };
            
        return items.filter((item) => {
            return item.label.indexOf(value) > -1;
        });

    };

    filter(items, filter) {

        switch(filter) {
            case 'all': 
                return items;
            case 'active':
                return items.filter((item) => !item.done );
            case 'done':
                return items.filter((item) => item.done );
            default: 
                return items; 
        }
    }

    onFilterChange = (filter) => {
        this.setState({ filter });
    };
    
    render() {

        const { todosData, value, filter } = this.state;

        const doneCount = todosData
                        .filter((el) => el.done).length

        const toDOCount = todosData
                        .filter((el) => !el.done).length

        const visibleItem = this.filter( this.search(todosData, value), filter);

        return ( 
            <div className="content">
                <AppHeader toDo={toDOCount} done={doneCount} />
                <div className="search-penal">
                    <SearchPanel 
                        onSearchChange={ this.onSearchChange }/>
                    <ItemStatusFilter 
                        filter={filter}
                        onFilterChange={this.onFilterChange} />
                </div>
                <TodoList 
                    todos={visibleItem}
                    onDeleted={ this.deleteItem }
                    onToggleDone={this.onToggleDone}
                    onToggleImportant={this.onToggleImportant}
                    />
                <AddListItem onAddItem={ this.addItem }/>
            </div>
        );

    };

};


