import React from 'react'

// functional component (x class component)
export default function first(props) {
    console.log(props)
    const msg = 'My msg is new!';
    return (<h2>
        { props.title }
        </h2>);
}