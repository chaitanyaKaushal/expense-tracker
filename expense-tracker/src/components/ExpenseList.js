import ExpenseItem from "./ExpenseItem";
import './styles/ExpenseList.css';

export default function ExpenseList({expenses}) {
    return(
        <ul className="expenses-list">
            {
                expenses.length === 0 ? <h2 className="expenses-list__fallback">No expenses found!</h2> : expenses.map(function(expense){
                    return (
                        <ExpenseItem
                            key={expense.id}
                            expenseDate = {expense.date}
                            expenseTitle = {expense.title}
                            expenseAmount = {expense.amount}
                        />
                    )
                })
            }
        </ul>
    );
};