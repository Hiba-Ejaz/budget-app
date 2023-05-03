import { useState } from "react";
import './AddDetail.css';
import { incomeType } from "../components/types";

type addDetail={
     addDetail:(d: incomeType) => void
     }

    function  AddDetails(props:addDetail){
    const [incomeSource,setIncomeSource]=useState<string>("");
     const [incomeAmount,setIncomeAmount]=useState<number>(0);
    const [incomeDate,setIncomeDate]=useState<string>("");
     const handleChangeIncomeSource=(e: React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value); 
        setIncomeSource(e.target.value);
        console.log("incomeSource",incomeSource);
    }
    const handleChangeIncomeAmount=(e: React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value); 
        const amount = parseFloat(e.target.value);
        setIncomeAmount(amount);
        console.log("incomeAmount",incomeAmount);
    }
    const handleChangeIncomeDate=(e: React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value); 
        setIncomeDate(e.target.value);
        console.log("income",incomeSource);
    }
    const handleClick=(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        console.log("hello");
        e.preventDefault();
        props.addDetail({incomeSource,
        incomeAmount,
        incomeDate})
    };
return(
    <div className="addDetailsForm">
        <form className="incomeForm">
            <label>Income Source</label><input onChange={handleChangeIncomeSource} id="incomeSource" type="text"></input>
            <label >Amount of income</label><input onChange={handleChangeIncomeAmount} type="text"></input>
            <label >Date of income</label><input onChange={handleChangeIncomeDate} type="date"></input>
          <button onClick={handleClick}>ADD INCOME</button>
        </form>
    </div>
)
}

export default AddDetails;