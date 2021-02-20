import { TableHeader } from "../Shared/Table"

type IndexedHeaders = {
    [key: string]: TableHeader
}

type OrganizedItem = {
    [key: string]: any

    enableActions?: boolean
  
    onDelete?: (item : any) => void
    onDetail?: (item : any) => void
    onEdit?: (item : any) => void
}

export default function organizeData(data: any[], cabecalho: TableHeader[]):
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
