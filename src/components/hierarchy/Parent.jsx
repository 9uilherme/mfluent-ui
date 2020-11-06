import React, { cloneElement } from 'react'

export default (props) => (
    <div>
        <h2>Names</h2>
        {props.children.map((child) => cloneElement(child, props))}
        </div>
    
)