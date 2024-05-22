import { useContext } from 'react'
import TableContext from './TableContext'


const ITEM_HEIGHT = 50; // 每⾏⾼度
const SCROLL_HEIGHT = 500; // 滚动区域⾼度
const showNum = Math.ceil(SCROLL_HEIGHT / ITEM_HEIGHT) // 显⽰的数量

function TableRow ({...props}) {
  const {'data-row-key': index} = props
  const { start } = useContext(TableContext)
  const isShow = index >= start && index < start + showNum
  return (
    isShow ? <tr key={index} {...props} /> : null
  )
}
export default TableRow