import React from 'react'

export default props => {
    const setParent = props.setParent
    const randomAge = () => parseInt(Math.random() * 42) + 18
    return (<div>
        <button onClick={_ => setParent('Moacir', randomAge())}>Set Parent</button>
    </div>)
}