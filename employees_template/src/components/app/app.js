import {Component} from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Bob M.', salary: 1200, increase: true, promote: true, id: 1},
                {name: 'John D.', salary: 1000, increase: true, promote: false, id: 2},
                {name: 'Lara K.', salary: 1200, increase: false, promote: false, id: 3}
            ],
            term: '',
            typeSort: 'all'

        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            //const index =data.findIndex(item => item.id === id);
            //console.log(index);

            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            promote: false,
            id: Date.now(),
        }
        if (newItem.name.length < 3 || !newItem.salary.length) return
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }


    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}

                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term: term});
    }


    sortEmp = (items, typeSort) => {
        switch (typeSort) {
            case 'promote':
                return items.filter(item => item.promote)

            case 'moreThen1000':
                return items.filter(item => item.salary > 1000)

            default:
                return items
        }


    }

    onUpdateSort = (typeSort) => {
       this.setState({typeSort: typeSort})
    }


    render() {
        const {data, term,typeSort} = this.state
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const filteredData = this.sortEmp(this.searchEmp(data, term),typeSort);

        return (
            <div className="app">
                <AppInfo
                    employees={employees}
                    increased={increased}/>

                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter typeSort={typeSort}
                    onUpdateSort={this.onUpdateSort}/>
                </div>

                <EmployeesList
                    onDelete={this.deleteItem}
                    dataTo={filteredData}
                    onTogglePropTo={this.onToggleProp}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;
