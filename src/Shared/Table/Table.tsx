import React from 'react'
import organizeData from '../../utils/organizeDataForTable'
import './Table.scss'
//import fakeProducts from './Table.mockdata'

export declare interface TableHeader{
    key: string
    value: string
    right?: boolean
}

declare interface TableProps {
    headers: TableHeader[]
    data: any[]
}

const Table: React.FC<TableProps> = (props) => {

    const [organizedData, indexedHeaders] = organizeData(props.data,props.headers)

    //console.table(organizedData)
    //console.table(indexedHeaders)

    return <table className="AppTable">
    <thead>
      <tr>
          {
              props.headers.map(fakeCabecalho => 
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