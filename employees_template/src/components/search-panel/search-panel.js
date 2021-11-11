import {Component} from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            InnerTerm: ''
        }
    }

    onInnerUpdateSearch = (e) => {
        const terms = e.target.value;
        this.setState({InnerTerm: terms}) // установка локального\внутреннего состояния
        this.props.onUpdateSearch(terms)
    }

    render() {
        return (
            <input type="text"
                   className="form-control search-input"
                   placeholder="Найти сотрудника"
                   value={this.state.InnerTerm}
                   onChange={this.onInnerUpdateSearch}/>
        )
    }
}

export default SearchPanel;