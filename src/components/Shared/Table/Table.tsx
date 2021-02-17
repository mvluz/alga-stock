import React from 'react'
import './Table.scss'
import fakeProducts from './Table.mockdata'

const fakeCabecalho: TableHeader[] = [
    { key: 'id', value: '#'},
    { key: 'name', value: 'Product'},
    { key: 'price', value: 'Price', right: true},
    { key: 'stock', value: 'Available Stock', right: true},
]

declare interface TableHeader{
    key: string
    value: string
    right?: boolean
}

type IndexedHeaders = {
    [key: string]: TableHeader
}

type OrganizedItem = {
    [key: string]: any
}

function organizeData(data: any[], cabecalho: TableHeader[]):
    [OrganizedItem[], IndexedHeaders]  {
    const indexedHeaders: IndexedHeaders = {}

    cabecalho.forEach(intera => {
        indexedHeaders[intera.key] = {
            ...intera}
    })

    //console.log(indexedHeaders)

    const headerKeyInOrder = Object.keys(indexedHeaders)

    //console.log(headerKeyInOrder)

    const organizedData = data.map(item => {
        const organizedItem: OrganizedItem = {}

        headerKeyInOrder.forEach(key => {
            organizedItem[key] = item[key]
        })

        organizedItem.$original = item

        return organizedItem
    })

    //console.table(organizedData)
    return [organizedData, indexedHeaders]
}

const Table = () => {

    const [organizedData, indexedHeaders] = organizeData(fakeProducts,fakeCabecalho)

    //console.table(organizedData)
    //console.table(indexedHeaders)

    return <table className="AppTable">
    <thead>
      <tr>
          {
              fakeCabecalho.map(fakeCabecalho => 
                <th 
                    className={fakeCabecalho.right ? 'right' : '' }
                    key={fakeCabecalho.key}
                >
                    {fakeCabecalho.value}
                </th>)
          }
      </tr>
    </thead>
    <tbody>
    {
        organizedData.map((row, i) => {
          return <tr key={i}>
            {
              Object
                .keys(row)
                .map((item, i) =>
                  item !== '$original'
                    ? <td
                        key={row.$original.id + i}
                        className={indexedHeaders[item].right ? 'right' : ''}
                      >
                        { row[item] }
                      </td>
                    : null
                )
            }
          </tr>
        })
      }
    </tbody>    
    </table>
}

export default Table