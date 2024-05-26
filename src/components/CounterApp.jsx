import React, { useState } from 'react'

const CounterApp = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-red-500 mb-8">Counter App</h1>

            <div className="flex items-center">
                <button className="text-5xl font-bold border-2 border-blue-500 px-5 py-3" onClick={() => setCount(count + 1)}> + </button>
                <h1 className="text-4xl mx-8">{count}</h1>
                <button className="text-5xl font-bold border-2 border-blue-500 px-5 py-3" onClick={() => setCount(count - 1)}> - </button>
            </div>
        </div>
    )
}

export default CounterApp
