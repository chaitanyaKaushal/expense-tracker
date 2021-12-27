import React, {useState} from 'react';

import '../styles/Form.css';

export default function Form({buttonText,onSaveExpenseForm, onHideForm}) {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');

    const titleChangeHandler = (event) =>{
        setTitle(event.target.value);
    };
    const dateChangeHandler = (event) =>{
        setDate(event.target.value);
    };
    const amountChangeHandler = (event) =>{
        setAmount(event.target.value);
    };

    const resetFormHandler = () => {
        setTitle('');
        setAmount('');
        setDate('');
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const userData = {
            title,
            date: new Date(date),
            amount: +amount,
        };
        onSaveExpenseForm(userData);
        resetFormHandler();
        onHideForm();
    }

    const closeFormHandler = () => {
        resetFormHandler();
        onHideForm();
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form__controls">
                <div className="form__control">
                    <label> Title </label>
                    <input 
                        type='text'
                        onChange={titleChangeHandler}
                        value={title}
                        required
                    />
                </div>
                <div className="form__control">
                    <label> Amount </label>
                    <input 
                        value={amount}
                        type='number'
                        min="0.01" step="0.01"
                        onChange={amountChangeHandler}
                        required
                    />
                </div>
                <div className="form__control">
                    <label> Date </label>
                    <input 
                        value={date}
                        type='date'
                        min="2019-01-01" max="2022-12-31"
                        onChange={dateChangeHandler}
                        required
                    />
                </div>
            </div>
            <div className="form__actions">
                <button type="button" onClick={closeFormHandler}>Cancel</button>
                <button type="submit">{buttonText}</button>
            </div>
        </form>
    )
} 