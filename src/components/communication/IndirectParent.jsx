import React, { useState } from 'react'
import IndirectChild from './IndirectChild';

export default props => {
    // React hook v16.13
    // desestructuring, because this hook useState returns an array
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    function changeName(nameIn, ageIn) {
        // Changes comes from data to interface (UI)
        setName(nameIn)
        setAge(ageIn)
        // console.log(nameIn)
        // console.log(name)
    }
    
    return (<div style={{marginTop: '20px'}}>
        <div>Parent name: {name}, {age}</div>
        <IndirectChild setParent={changeName} />
    </div>)
}