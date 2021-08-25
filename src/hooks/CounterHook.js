import {useState} from 'react'


function useCounter(initial=0){
    const [count, setCount] = useState(initial)

    const increment = () => {
        setCount( prevCount => prevCount + 1 )
    }

    const decrement = () => {
        setCount( prevCount => prevCount - 1 )
    }

    return [count, increment, decrement]

}

export default useCounter