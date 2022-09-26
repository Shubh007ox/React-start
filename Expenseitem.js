import './Expenseitem.css'

function ExpenseSet(props) {
  return (
    <div className="expense-item">
        <div>{props.time.toISOString()}</div>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">${props.amount}</div><br></br>
        <div className='LocationOfExpenditure'>
            <h3>{props.LocationOfExpenditure}</h3>
        </div>
    </div>
  );
}
export default ExpenseSet;
