import {useState} from 'react'

export default function TestComponent() {
    const [count, setCount] = useState(0)

    return (
        <div className='flex flex-col items-center gap-4 rounded-md border p-4'>
            <h1 className='text-3xl font-bold'>{count}</h1>
            <div className='flex gap-4'>
                <button
                    className='rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600'
                    onClick={() => setCount(x => x + 1)}
                >
                    Increment
                </button>
                <button
                    className='rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600'
                    onClick={() => setCount(x => x - 1)}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}
