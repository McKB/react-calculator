import React from "react";
import { useState } from "react";
import './Content.css'

const Content = () => {

    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    const [operator, setOperator] = useState('+')
    const [answer, setAnswer] = useState('0')

    const doMath = (num1, num2, op) => {
        switch (op) {
            case '+':
                setAnswer(num1 + num2)
                break
            case '-':
                setAnswer(num1 - num2)
                break
            case 'x':
                setAnswer(num1 * num2)
                break
            case '/':
                setAnswer(num1 / num2)
                break
            default:
                setAnswer(null)
        }
        if (num1 === 0 && num2 === 0 && op === '/') {
            setAnswer('Not a number')
        }
    }

    const onButtonClick = () => {
        if ((input1 || input1 === 0) && (input2 || input2 === 0)) {
            doMath(Number(input1), Number(input2), operator)
        } else {
            setAnswer('')
        }
    }

    return (
        <div className='contentContainer'>
            <input type='text' name='input1' className='inputBox' onChange={(event) => { setInput1(event.target.value) }}/>
            <select name='operator' className='operator' onChange={(event) => { setOperator(event.target.value) }}>
                <option>+</option>
                <option>-</option>
                <option>x</option>
                <option>/</option>
            </select>
            <input type='text' name='input2' className='inputBox' onChange={(event) => { setInput2(event.target.value) }} />
            <button name='equals' className='equals' onClick={() => onButtonClick() }>=</button>
            <input type='text' name='answer' className='inputBox' value={answer || answer === 0 ? answer : ''}/>
            {answer || answer === 0 ? null : <div className='errorMessage'>Error! Please use numbers only.</div>}
        </div>
    )
}

export default Content
