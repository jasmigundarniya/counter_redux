import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./store";
import './index.css'

const App = () => {

  const dispatch = useDispatch();
  const count = useSelector((state) => state);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    if (count > 0) {
      dispatch(decrement());
    }
  };

  return (

    <div className='main'>
      <h3>
        Counter Component
      </h3>
      <button className='incre' onClick={handleIncrement}>Increment</button>
      <p>{count}</p>
      <button className='decre' onClick={handleDecrement}>Decrement</button>
    </div>

  )
}

export default App