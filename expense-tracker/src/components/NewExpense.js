import { useState } from 'react';
import './styles/NewExpense.css';
import Form from './common/Form';

export default function NewExpense({onAddExpense}){
    const saveExpenseFormHandler = (enteredData) => {
        const expenseData = {
            ...enteredData,
            id: Math.random().toString()
        }
        console.log(expenseData);
        onAddExpense(expenseData);
    }

    const [hideForm, setHideForm] = useState(true);
    const hideFormHandler = () => setHideForm(oldValue => !oldValue);

    return(
        <div className="new-expense">
            {
                hideForm ? <button type="button" onClick={hideFormHandler}>Add New Expense</button> : <Form
                buttonText="Add Expense"
                onSaveExpenseForm={saveExpenseFormHandler}
                onHideForm={hideFormHandler}
            />
            }
            
        </div>
    )
}