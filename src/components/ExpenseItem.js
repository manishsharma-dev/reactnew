import './ExpenseItem.css';
function ExpenseItem() {
    const expenseDate = new Date(2023, 8, 3);
    const expenseTitle = 'Car Insaurance';
    const expenseAmount = 294.67;
    return (
        <div className='expense-item'>
            <div>{expenseDate.toDateString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>${expenseAmount}</div>
            </div>
        </div>
    )
}
export default ExpenseItem;