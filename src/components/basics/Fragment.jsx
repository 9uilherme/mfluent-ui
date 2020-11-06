import React from 'react'

// default can return anonymous function
export default function () {
    return (
    // <>
    <React.Fragment>
        <h2>Fragment...</h2>
        <p>Looks like it</p>
    </React.Fragment>
    // </>
        )
}

/* other examples

// not anonymous
export function fragment() {
    return (<div></div>)
}

// arrow function
export default (props) => {
    return (<div></div>)
}

// arrow function
export default () => {
    return (<div></div>)
}

// arrow function
export default props => {
    return (<div></div>)}

// arrow function
export default _ => {
    return (<div></div>)}

// arrow function
export default _ => (<div></div>)

*/