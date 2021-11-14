import ExpenseItem from "./ExpenseItem";
import Card from "./common/Card";
import './styles/Expenses.css';

export default function Expenses({expenses, incomingClassName}) {
    const classes = 'expenses ' + incomingClassName;

    return (
        <Card className={classes}>
            {
                expenses.map(function(expense){
                    return (
                        <ExpenseItem
                            expenseDate = {expense.date}
                            expenseTitle = {expense.title}
                            expenseAmount = {expense.amount}
                        />
                    )
                })
            }
        </Card>
    )
}