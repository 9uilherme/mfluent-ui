import React from 'react'

export default (props) => {
    // desestructuring
    const {min, max} = props;

    /* desestructuring
    const [min, max] = props; */

    return <div>
        <h2>Random value</h2>
        <ul>
            <li>Min: {min}</li>
            <li>Max: {max}</li>
            <li>Random: {calcRandom(min, max)}</li>
        </ul>
    </div>

}

function calcRandom (min, max) {
    return parseInt(Math.random() * (max - min)) + min
    
}