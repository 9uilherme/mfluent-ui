import React from 'react'
import products from './productsList'
import './productsStyle.css'

export default (props) => {

    return (<div>
        <table className="tableProducts">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Author</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                { getRows(products) }
            </tbody>
        </table>
        </div>)
}

function getRows(products) {
    return products.map((product, i) => {
        return <tr key={product.id} className={i % 2 == 0 ? 'Even' : 'Odd'}>
                <td className="col fst">{product.id}</td>
                <td className="col sec">{product.name}</td>
                <td className="col thi">{product.author}</td>
                <td className="col fou">{product.year}</td>
            </tr> 
    })
}