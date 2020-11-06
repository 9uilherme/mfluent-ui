import React from 'react';
import './Megasena.css'

export default (props) => {
    let list = getList()

    return (
    <div className="Megasena">
        <h2 className="title">## Megasena ##</h2> 
        <div className="content">
            <ul>
                {list.map((el, i) => {
                    return <li key={i} style={{border: '2px solid #' + getRandomFix(0, 999999, 6), color: '#' + getRandom(0, 999999, 6)}}>{el}</li>   
                })}
            </ul>
        </div>
    </div>
    )
}

function getList() {
    let i
    let arr = [] 
    for(i = 0; i < 6; i++) {
        let val = getRandom(1, 60)
        while (arr.includes(val)) {
            val = getRandom(1, 60)
        }
        arr.push(val)
    }
    return arr.sort();
}

function getRandomFix(min, max, fix) {
    const num = getRandom(min, max) + "";
    const zeros = fix - num.length;
    const preReturn = "000000" + num
    return preReturn.substr(fix - zeros)
}

function getRandom(min, max) {
    return parseInt(Math.random() * (max - min)) + min
}
