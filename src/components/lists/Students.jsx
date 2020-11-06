import React from 'react'
import students from './studentsList'

export default () => {

    const lis = students.map((student) => {
        return <li key={student.id}>
            {student.name}
        </li>
    })

return ( <ul>
    {lis}
    </ul>)



}