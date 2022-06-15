import React from "react";
import { useState } from "react";

const Content = () => {

    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    const [operator, setOperator] = useState('+')
    const [answer, setAnswer] = useState('')

    const doMath = (num1, num2, op) => {
        let answer = null
        switch (op) {
            case '+':
                answer = num1 + num2
                break
            case '-':
                answer = num1 - num2
                break
            case 'x':
                answer = num1 * num2
                break
            case '/':
                answer = num1 / num2
                break
            default:
                answer = null
        }

        return answer
    }

    return (
        <>
            <input type='text' name='input1' className='inputBox' onChange={(event) => { setInput1(Number(event.target.value)) }}/>
            <select name='operator' onChange={(event) => { setOperator(event.target.value) }}>
                <option>+</option>
                <option>-</option>
                <option>x</option>
                <option>/</option>
            </select>
            <input type='text' name='input2' className='inputBox' onChange={(event) => { setInput2(Number(event.target.value)) }} />
            <button name='equals' onClick={() => setAnswer(doMath(input1, input2, operator)) }>=</button>
            <input type='text' name='answer' className='inputBox' value={answer}/>
            <div>
                error message holder
            </div>
        </>
    )
}

export default Content
