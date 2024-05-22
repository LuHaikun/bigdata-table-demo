import { useRef, useState, useLayoutEffect } from 'react'
import TableContext from './TableContext'

const ITEM_HEIGHT = 50; // 每⾏⾼度
function TableBody(props) {
  const wrapper = useRef() // 滚动元素
  const [start, setStart] = useState(0) //开始渲染的位置
  const totalHeight = props.data.length * ITEM_HEIGHT // 总⾼度

  useLayoutEffect(() => {
    const scrollEl = props.tbody.current?.querySelector('.ant-table-body')
    if (!scrollEl) return
    const handleScroll = () => {
      // 计算开始渲染的位置
      scrollEl && setStart(Math.floor(scrollEl.scrollTop / ITEM_HEIGHT))
    }
    scrollEl && scrollEl.addEventListener('scroll', handleScroll)

    return () => {
      scrollEl && scrollEl.removeEventListener('scroll', handleScroll)
    }
  }, [wrapper.current, props.tbody.current])

  const translateY = start * ITEM_HEIGHT // 偏移量
  return (
    <div ref={wrapper} style={{height: totalHeight, width: 1500}}>
      <div style={{transform: `translate3d(0, ${translateY}px, 0)`}}>
        <TableContext.Provider value={{data: props.data, start}}>
          <tbody {...props} />
        </TableContext.Provider>
      </div>
    </div>
  )
}

export default TableBody;