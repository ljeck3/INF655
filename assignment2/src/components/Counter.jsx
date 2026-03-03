import { useState } from "react";

function Counter(){
    const [count, updateCount] = useState("0");
    return (
        <div>
            {count}
            <div>
                <button
                    type="button"
                    onClick={() => updateCount("Test")}>Click Me
                </button>
            </div>
        </div>
    );
}

export default Counter;
