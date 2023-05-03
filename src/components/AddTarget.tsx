import React, { useState } from 'react'

type setTarget={
    setTargetData:(d:number)=>void
}
 function AddTarget(props:setTarget) {
    const [targetData,setTargetData]=useState<number>(0);
    const changeListenerInputTarget=(e: React.ChangeEvent<HTMLInputElement>)=>{
        const target = parseFloat(e.target.value);
        setTargetData(target);     
    }
    const clickListenerInputTarget=(e: React.MouseEvent<HTMLButtonElement, MouseEvent> )=>{
        e.preventDefault();
        props.setTargetData(targetData);
    }
    const clickListenerResetInputTarget=(e: React.MouseEvent<HTMLButtonElement, MouseEvent> )=>{
        e.preventDefault();
        props.setTargetData(0); }
  return (
    <>
    <div>AddTarget</div>
    <form>
        <input type="text" onChange={changeListenerInputTarget}></input>
        <button onClick={clickListenerInputTarget}>SET TARGET</button>
        <button onClick={clickListenerResetInputTarget}>RESET TARGET</button>
    </form>
    </>
  )
}

export default AddTarget;