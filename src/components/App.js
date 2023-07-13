
import React from "react";
import { increment,decrement } from "../action/counteraction";
import { useSelector,useDispatch } from "react-redux";
import './../styles/App.css';

const App = () => {
  const counter = useSelector(state=>state.a)
  const dispatch=useDispatch();
  return (
    <div>
        <h1>Counter:{counter}</h1>
        <button onClick={()=>dispatch(increment(1))}>Increment</button>
        <button onClick={()=>dispatch(decrement(1))}>Decrement</button>
    </div>
  )
}

export default App
