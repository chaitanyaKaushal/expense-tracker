import '../styles/ExpenseDate.css'

export default function ExpenseDate({expenseDate}){
    return (
        <div className="expense-date">
            <div className="expense-date__month">{expenseDate.toLocaleString('en-US',{month: 'long'})}</div>
            <div className="expense-date__day">{expenseDate.toLocaleString('en-US',{day: '2-digit'})}</div>
            <div className="expense-date__year">{expenseDate.getFullYear()}</div>
        </div>
    )
}