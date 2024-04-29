import React, {useState, useEffect} from "react";
/*
COUNT COLOR CHANGER USING useEffect
const EffectHook = () => {
    const [count, setCount]= useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count, color]);

    const addCount = () => {
        setCount(c => c + 1);
    }    
    const subtractCount = () => {
        setCount(c => c - 1);
    } 
    const changeColor = () => {
        setColor(c => c === "green" ? "red" : "green");
    } 
    return (
        <div>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button> <br />
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
} */

const EffectHook = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event Listener Added");

        return() => {
            window.removeEventListener("resize", handleResize);
            console.log("Event listener removed")
        }
    }, []);

    useEffect(() => {
       document.title = `Size: ${width} x ${height}`;
    }, [width, height]);

    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    return (
        <div>
            <p>Window Width: {width}</p>
            <p>Window Height: {height}</p>
        </div>
    )
}


export default EffectHook;


//useEffect () = React Hook that tells react to DO THIS CODE WHEN (Pick one)
//                This component re-renders
//                This component mounts
//                The state of a value

// useEffect(function, [dependencies])

//1. useEffect(() => {})   // runs after every re-render
//2. useEffect(() => {}, [])   // runs only on mount
//3. useEffect(() => {}, [value])   // Runs on mount + when value changes

//USES
//1. Event Listeners
//2. DOM Manipulation
//3. Subscriptions (real-time updates)
//4. Fetching data from API
//5. Clean up a component when it unmounts