import "./ExpenseDisplay.css"
import { expenseType} from "./types"

function ExpenseDisplay(props:expenseType ){
return(
    <div className="expenseDisplay">
    <h1>Expenses</h1>
    expense source {props.expenseSource}
    expense amount= {props.expenseAmount}
    expense date = {props.expenseDate}
    </div>
)
}

export default ExpenseDisplay;
