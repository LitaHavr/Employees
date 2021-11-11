import {Component} from "react";
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: '',
            salary: ''
        }
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    onSubmitForm = (e) => {
        e.preventDefault();

        this.props.onAdd(this.state.names, this.state.salary);
        this.setState({
            names: '',
            salary: ''
        })
    }


    render() {

        const {names, salary} = this.state
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmitForm}>
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="Как его зовут?"
                           onChange={this.onInputChange}
                           value={names}
                           name='names'
                    />
                    <input type="number"
                           className="form-control new-post-label"
                           placeholder="З/П в $?"
                           onChange={this.onInputChange}
                           value={salary}
                           name='salary'
                    />

                    <button type="submit"
                            className="btn btn-outline-light">Добавить
                    </button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;