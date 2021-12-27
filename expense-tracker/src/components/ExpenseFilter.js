import React from 'react';
import './styles/ExpenseFilter.css';

const ExpenseFilter = ({onChangeFilter, currentFilter}) => {
    const dropdownChangeHandler = (event) => {
        onChangeFilter(event.target.value);
    }
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by Year</label>
                <select value={currentFilter} onChange={dropdownChangeHandler}>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                </select>
            </div>
        </div>
    )
};

export default ExpenseFilter;