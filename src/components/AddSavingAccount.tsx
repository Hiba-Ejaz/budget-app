import React, { useState } from 'react';
import { savingAmountType } from './types';

type addSavingAmountData={
      addSavingAmountData: (s: savingAmountType) => void
}
function AddSavingAccount(prop:addSavingAmountData) {
    const [savingAmount,setSavingAmount]=useState<number>(0);
    const handleChangeGetSavingAmount=(e: React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value); 
        const amount = parseFloat(e.target.value);
        setSavingAmount(amount);
        }
    const handleClickeGetSavingAmount=(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        console.log("hello");
        e.preventDefault();
        prop.addSavingAmountData({savingAmount});
    }
    const handleClickeSendBackFromSavingAmount=(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
      console.log("hello");
      e.preventDefault();
     // prop.DeductSavingAmountData({savingAmount});
     }
  return (
    <div>
    <h2>Saving Account</h2>
    <form>
    <label>Add Amount for Saving Account</label>
    <input type="text" onChange={handleChangeGetSavingAmount}></input>
    <button onClick={handleClickeGetSavingAmount}>ADD TO SAVING ACCOUNT</button>
    <button onClick={handleClickeSendBackFromSavingAmount}>SEND FROM SAVING Account</button>
    </form>
    </div>
  )
}

export default AddSavingAccount