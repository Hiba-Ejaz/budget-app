import "./Budget.css"
import { expenseType, incomeType} from "./types"
import './Budget.css';

function IncomeDisplay(props:incomeType){
return(
    <div className="displayForIncome">
    <h1>Income Source</h1>
   income source {props.incomeSource}
    income amount= {props.incomeAmount}
    income date = {props.incomeDate}
    </div>
)
}

export default IncomeDisplay;
