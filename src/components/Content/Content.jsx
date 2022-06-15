import React from "react";
import { useState } from "react";

const Content = () => {

    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    const [operator, setOperator] = useState('+')
    const [answer, setAnswer] = useState('0')

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

    const onButtonClick = () => {
        setAnswer(doMath(input1, input2, operator))
        if (!input1 || !input2 || isNaN(answer)) {
            setAnswer(null)
        }  
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
            <button name='equals' onClick={() => onButtonClick() }>=</button>
            <input type='text' name='answer' className='inputBox' value={answer || answer === 0 ? answer : ''}/>
            {answer || answer === 0 ? null : <div className='errorMessage'>Error! Please use numbers only.</div>}
        </>
    )
}

export default Content
