import React, { useState } from 'react';
import Card from "./common/Card";
import './styles/Expenses.css';
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

export default function Expenses({expenses, incomingClassName}) {
    const classes = 'expenses ' + incomingClassName;
    const [filteredYear, setFilteredYear] = useState('2021');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    const filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear);

    return (
        <div>
            <Card className={classes}>
                <ExpenseFilter onChangeFilter={filterChangeHandler} currentFilter={filteredYear} />
                <ExpenseChart expenses={filteredExpenses} />
                <ExpenseList expenses={filteredExpenses} />
            </Card>
        </div>
    )
}