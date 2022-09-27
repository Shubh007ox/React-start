import "./Expenseitem.css";

import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

function ExpenseSet(props) {
  return (
    <div className="expense-item">
      <ExpenseDate time={props.time} />
      <ExpenseDetails
        title={props.title}
        amount={props.amount}
        LocationOfExpenditure={props.LocationOfExpenditure}
      />
    </div>
  );
}
export default ExpenseSet;


function ExpenseDatails(props) {
    return(
        <div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price">${props.amount}</div><br></br>
            <div className='LocationOfExpenditure'>
                <h3>{props.LocationOfExpenditure}</h3>
            </div>
        </div>
    ) 
}

export default ExpenseDatails;
