import React, { useState } from 'react'
import './Megasena.css'

export default (props) => {
    let [arr, setArr] = useState([]);
    arr = generateArr(6);
    return (<div className="Megasena">
    <h2 className="title">## Megasena ##</h2> 
    <div className="content">
        <div>
            <ul>
                {arr.map((el, i) => {
                    return <li key={i} style={{border: '2px solid #DD0', color: '#000'}}>{el}</li>   
                })}
            </ul>
        </div>
        <button className="button" onClick={() => setArr(generateArr(6))} >Update</button>
    </div>
</div>)}

function generateArr (qtd) {
    const arr = Array(qtd).fill(0)
    
    let newArr = arr.reduce((nums) => {
        const newNum = generateNumber(1, 60, nums)
        return [...nums, newNum]
    }, [])

    return newArr.sort((n1, n2) => n1 - n2);
}


function generateNumber (min, max, arr) {
    const num = parseInt(Math.random() * (max - min)) + min;
    return arr.includes(num) ? generateNumber(min, max, arr) : num;
}