
import React from 'react'
import Child from './components/hierarchy/Child'
import Students from './components/lists/Students'
import Parent from './components/hierarchy/Parent'
import Products from './components/tables/Products'
import UserInfo from './components/conditional/UserInfo'
import IndirectParent from './components/communication/IndirectParent'
import Megasena from './components/megasena.v2/Megasena'

export default () =>
    (
    <div className="Card">
        <Parent lastName = "Andraschko">
            <Child name='Guilherme'></Child>
            <Child name='Izabela'></Child>
        </Parent>

        <Students />
        <Products name="Books" />

        
        <UserInfo user={{name: "Guilherme", age: 29}} /> 
        <UserInfo user={{age: 29}} /> 
        <UserInfo user={{}} /> 

        <IndirectParent />

        <Megasena />


        {/* <RandomNum min={10} max={50} />
        <strong><First title='new title' /></strong>
        <strong><Fragment title='new title' /></strong> */}
    </div>
    )