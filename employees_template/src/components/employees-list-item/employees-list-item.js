import './employees-list-item.css';


const EmployeesListItem = (props) => {


    const {nameTo, salaryTo, onDeleteTo, onTogglePropTo, increaseTo, promoteTo} = props;

    let classNames = 'list-group-item d-flex justify-content-between';

    if (increaseTo) {
        classNames += ' increase';
    }

    if (promoteTo) {
        classNames += ' like';
    }


    return (
        <li className={classNames}>
               <span className="list-group-item-label"
                     data-toggle='promote'
                     onClick={onTogglePropTo}
               >{nameTo}</span>
            <input type="text" className="list-group-item-input" defaultValue={salaryTo + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                        className="btn-cookie btn-sm "
                        data-toggle='increase'
                        onClick={onTogglePropTo}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button
                    onClick={onDeleteTo}
                    type="button"
                    className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )

}


export default EmployeesListItem;