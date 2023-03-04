import React from 'react'
import organizeData from '../../utils/organizeDataForTable'
import Button from '../Button'
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
    
    enableActions?:boolean

    onDelete?: (item : any) => void
    onDetail?: (item : any) => void
    onEdit?: (item : any) => void
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
          {
            props.enableActions
            && <th className='right'>
              Actions
            </th>
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
                        key={row.$original._id + i}
                        className={indexedHeaders[item].right ? 'right' : ''}
                      >
                        { row[item] }
                      </td>
                    : null
                )
            }
            {
              props.enableActions && 
                  <td className='actions right'>
                    {
                      props.onEdit &&
                        <Button onClick={()=>props.onEdit && props.onEdit(row.$original)}>
                          Edit
                        </Button>
                    }
                    {
                      props.onDetail &&
                        <Button onClick={()=>props.onDetail && props.onDetail(row.$original)}>
                          Detail
                        </Button>
                    }
                    {
                      props.onDelete &&
                        <Button onClick={()=>props.onDelete && props.onDelete(row.$original)}>
                          Delete
                        </Button>
                    }
                  </td>
            }
          </tr>
        })
      }
    </tbody>    
    </table>
}

export default Table