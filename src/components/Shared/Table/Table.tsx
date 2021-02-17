import React from 'react'
import './Table.scss'
import fakeProducts from './Table.mockdata'

const fakeCabecalho = [
    { key: 'name', value: 'Product'},
    { key: 'price', value: 'Price'},
    { key: 'actions', value: 'Actions' },
    { key: 'stock', value: 'Available Stock'},
]

const Table = () => {
    return <table className="AppTable">
    <thead>
      <tr>
          {
              fakeCabecalho.map(intera => <th key={intera.key}>{intera.value}</th>)
          }
      </tr>
    </thead>
    <tbody>
        {
            fakeProducts.map(intera => <tr>
                <td>{ intera.name }</td>
                <td>${intera.price}</td>
                <td className="right">{intera.stock}</td>
            </tr>)
        }
    </tbody>    
    </table>
}

export default Table