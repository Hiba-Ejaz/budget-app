import './App.css';
import Budget from './components/IncomeDisplay';
import AddDetails from './add-details/addDetails';
import { useEffect, useState } from 'react';

import {incomeType,expenseType, savingAmountType} from "./components/types";
import AddExpenseDetails from './add-details/addExpenseDetails';
import ExpenseDisplay from './components/ExpenseDisplay';
import IncomeDisplay from './components/IncomeDisplay';
import AddSavingAccount from './components/AddSavingAccount';
import AddTarget from './components/AddTarget';
function App() {
const [incomeData,setIncomeData]=useState<incomeType[]>([]);
const [expenseData,setExpenseData]=useState<expenseType[]>([]);
const [balance,setBalance]=useState<number>(0);
const [savingAmountData,setSavingAmountData]=useState<savingAmountType[]>([]);
const [totalAmountSaved,settotalAmountSaved]=useState<number>(0);
const [target,setTarget]=useState<number>(0);
const addDetail=(d:incomeType)=> {setIncomeData([d,...incomeData])}
const setTargetData=(d:number)=>{
  setTarget(d);    
}
const addExpenseDetail=(e:expenseType)=>{
  if(balance-e.expenseAmount>=0){
    setExpenseData([e,...expenseData]);
  }
  else {
    alert("not enough balance");
  }
} 
const addSavingAmountData=(s:savingAmountType)=>{
  if(totalAmountSaved>=target || s.savingAmount>target ){
      alert("target limit reached, you cant add more savings")
  }
  else if(balance-s.savingAmount>=0){
  setSavingAmountData([s,...savingAmountData])
  }
  else {
    alert("not enough balance");
  }
}
useEffect(() => {
  let totalIncome = 0;
  let totalExpense = 0;
  let totalSavingAmount=0;
  
  // Calculate total income
   for (let i = 0; i < incomeData.length; i++) {
   totalIncome+=incomeData[i].incomeAmount || 0
   }

  for (let i = 0; i < expenseData.length; i++) {

   totalExpense += expenseData[i].expenseAmount || 0
  }
 
    let index=savingAmountData.length-1;
    console.log("index",index);
    let deductSavedAmount=0;
  (index>-1)?deductSavedAmount=savingAmountData[index].savingAmount:deductSavedAmount=0;
  console.log("saved amount for deduction",deductSavedAmount);
  setBalance(totalIncome-totalExpense-deductSavedAmount)
  totalSavingAmount=(savingAmountData?.reduce((acc, curr) => acc + curr.savingAmount, 0));
  if(totalSavingAmount>=0)
  settotalAmountSaved(totalSavingAmount)
  setTarget(target);
}, [incomeData, expenseData,savingAmountData]);
 return (
    <div className="App">
      <AddTarget setTargetData={setTargetData} ></AddTarget>
      SAVING TARGET : {target}
        <AddSavingAccount addSavingAmountData={addSavingAmountData}></AddSavingAccount>
      <AddDetails addDetail={addDetail}></AddDetails>
      <AddExpenseDetails addExpenseDetail={addExpenseDetail}></AddExpenseDetails>
      <div className='IncomeAndExpenses'>
        {expenseData.map(d=>
      <ExpenseDisplay expenseSource={d.expenseSource}
       expenseAmount={d.expenseAmount}
       expenseDate={d.expenseDate}
       ></ExpenseDisplay>)}
      {incomeData.map(d=>
      <IncomeDisplay incomeSource={d.incomeSource}
       incomeAmount={d.incomeAmount}
       incomeDate={d.incomeDate}
       ></IncomeDisplay>)}
       </div>
      <h4>Balance Left =</h4>{balance}
      <h4>amount saved =</h4>{totalAmountSaved}
  </div>
    );
}
export default App;
