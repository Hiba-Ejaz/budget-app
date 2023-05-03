import { useState } from "react";
import './AddDetail.css'
import { incomeType,expenseType } from "../components/types";

type addExpenseDetail={
    addExpenseDetail:(d: expenseType)=>void
}
function AddExpenseDetails(expenseProp:addExpenseDetail){
    const [expenseSource,setExpenseSource]=useState<string>("");
    const [expenseAmount,setExpenseAmount]=useState<number>(0);
   const [expenseDate,setExpenseDate]=useState<string>("");
const handleChangeExpenseSource=(e: React.ChangeEvent<HTMLInputElement>)=>{
    console.log(e.target.value); 
    setExpenseSource(e.target.value);
    console.log("expense Source",expenseSource);
}
const handleChangeExpenseAmount=(e: React.ChangeEvent<HTMLInputElement>)=>{
    console.log(e.target.value); 
    const amount = parseFloat(e.target.value);
  setExpenseAmount(amount);
    console.log("expense Amount",expenseAmount);
}
const handleChangeExpenseDate=(e: React.ChangeEvent<HTMLInputElement>)=>{
    console.log(e.target.value); 
    setExpenseDate(e.target.value);
    console.log("expense SOURCE",expenseSource);
}
const handleExpenseClick=(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    console.log("hello");
    e.preventDefault();
     expenseProp.addExpenseDetail({expenseSource,
     expenseAmount,
    expenseDate})
}
return(
    <div>
      <form>
            <label>Expense Source</label><input onChange={handleChangeExpenseSource} id="" type="text"></input>
            <label >Amount of Expense</label><input onChange={handleChangeExpenseAmount} type="text"></input>
            <label >Date of Expense</label><input onChange={handleChangeExpenseDate} type="date"></input>
          <button onClick={handleExpenseClick}>ADD EXPENSE</button>
        </form>
    </div>

)
}
export default AddExpenseDetails;