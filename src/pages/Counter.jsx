/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import Chart from "../components/Chart";
import CounterButtons from "../components/Button.jsx";
// import DisplayUserDetails from "./../components/user-data/DisplayUserDetails";

const Counter = () => {
    const [count, setCount] = useState(0);

    // state to manage the bg color using react-spring
    const [background, setBackground] = useSpring(() => ({ background: `rgba(255,0,0,0)` }));

    const [dataPoints, setDataPoints] = useState([0]);

    // function to update the bg color based on counter value
    const updateBackground = (newCount) => {
        setBackground({ background: `rgba(255,0,0, ${Math.min(newCount / 10, 1)})` });
    };

    // Handler for increment button
    const increment = () => {
        setCount((prev) => {
            const newCount = prev + 1;
            updateBackground(newCount);
            return newCount;
        });

        setDataPoints((prev) => [...prev, count + 1]);
    };


    // Handler for decrement button
    const decrement = () => {
        if (count > 0) {
            setCount((prev) => {
                const newCount = prev - 1;
                updateBackground(newCount);
                return newCount;
            });
            setDataPoints((prev) => [...prev, count - 1]);
        }
    };

    // Handler for reset button
    const reset = () => {
        setCount(0);
        setBackground({ background: `rgba(0,255,0,0)` });
        setDataPoints([0]);
    };

    return (
        <animated.div
            style={background}
            className="flex flex-col justify-center items-center h-screen w-full">
            <div className="flex justify-center items-center gap-10 w-full">
                <div className="flex items-center bg-white justify-center w-[40px] h-[40px] border text-1xl text-center rounded-full">
                    {count}
                </div>
                <div className="w-1/3">
                    <CounterButtons onIncrement={increment} onDecrement={decrement} onReset={reset} />
                </div>
            </div>
            <div className="w-[50%] h-auto mt-2  shadow-md border bg-gray-800">
                <Chart dataPoints={dataPoints} />
            </div>
        </animated.div>
    );
};

export default Counter;