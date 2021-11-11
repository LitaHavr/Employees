import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({dataTo, onDelete, onTogglePropTo}) => {

    const elements = dataTo.map(item => {
        return (
            <EmployeesListItem
                onDeleteTo={() => onDelete(item.id)}
                key={item.id}
                nameTo={item.name}
                salaryTo={item.salary}
                promoteTo={item.promote}
                increaseTo={item.increase}
                onTogglePropTo={(e) => onTogglePropTo(item.id,e.currentTarget.getAttribute('data-toggle'))}/>

        )
    })
    return (
        <
            ul
            className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;
