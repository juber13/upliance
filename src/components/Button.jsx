/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";

// Button component to handle increment, decrement, and reset actions
const CounterButtons = ({ onIncrement, onDecrement, onReset }) => {
    return (
        <div className="flex gap-5">
            <button className="bg-white border hover:border-none hover:bg-green-500 counter-buttons rounded-md  p-2" onClick={onIncrement}>Increment</button>
            <button className="bg-white border hover:border-none hover:bg-red-500 counter-buttons  rounded-md p-2" onClick={onDecrement}> Decrement </button>
            <button className="bg-white border hover:border-none hover:bg-slate-500 counter-buttons rounded-md p-2" onClick={onReset}>Reset</button>
        </div>
    );
};

export default CounterButtons;