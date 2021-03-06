import React from 'react';
import './styles/ExpenseItem.css'
import ExpenseDate from './utils/ExpenseDate';
import Card from './common/Card';

function ExpenseItem({expenseAmount,expenseDate,expenseTitle}){
    return(
        <li>
            <Card className="expense-item">
                <ExpenseDate expenseDate={expenseDate}/>
                <div className="expense-item__description">
                    <h2>{expenseTitle}</h2>
                    <div className="expense-item__price">Rs {expenseAmount}</div>
                </div>
            </Card>
        </li>
    )
}

export default ExpenseItem;