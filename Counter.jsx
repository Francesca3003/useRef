import { useState, useEffect, useRef } from "react";

function Counter({ initialValue }) {
  const [count, setCount] = useState(initialValue);
  const previousCountRef = useRef(initialValue);
  const newCountRef = useRef("");

  useEffect(() => {
    let newDirection =
      count > previousCountRef.current
        ? "up"
        : count < previousCountRef.current
        ? "down"
        : " ";

    if (newDirection !== newCountRef.current) {
      newCountRef.current = newDirection;
      console.log(newCountRef.current);
    }

    previousCountRef.current = count;
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Up</button>
      <button onClick={() => setCount(count - 1)}>Down</button>
    </div>
  );
}
export default Counter;
