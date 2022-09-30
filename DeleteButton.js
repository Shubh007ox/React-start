import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseSetItem.css'
import Card from '../UI/Card';


function ExpenseSetItem(props){
    const ClickHandler = () => {
        console.log('Clicked BC')
    }
    function Click2Handler(){
        console.log('Deleted')
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price"><h3>${props.amount}</h3></div>
            <button onClick={ClickHandler}>Click ME!!!</button>
            <button onClick={Click2Handler}>Delete</button>
        </Card>
    )


}
export default ExpenseSetItem;
