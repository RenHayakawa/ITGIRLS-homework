import { useState } from "react";


function Counter() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1)
    }

    return (
        <div>
            <button onClick={handleClick}>{count}</button>
        </div>
    );
}

export default Counter;