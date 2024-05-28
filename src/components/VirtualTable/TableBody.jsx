import { useRef, useState, useLayoutEffect } from "react";
import TableContext from "./TableContext";

function TableBody(props) {
  const wrapper = useRef(); // 滚动元素

  useLayoutEffect(() => {
    const scrollEl = props.tbody.current?.querySelector(".ant-table-body");
    if (!scrollEl) return;
    const handleScroll = () => {
      // 计算开始渲染的位置
      scrollEl && props.setStart(Math.floor(scrollEl.scrollTop / 50));
    };
    scrollEl && scrollEl.addEventListener("scroll", handleScroll);

    return () => {
      scrollEl && scrollEl.removeEventListener("scroll", handleScroll);
    };
  }, [wrapper.current, props.tbody.current]);

  const translateY = props.start * 50; // 偏移量
  return (
    <div ref={wrapper} style={{ height: props.totalHeight, width: 1500 }}>
      <div style={{ transform: `translate3d(0, ${translateY}px, 0)` }}>
        <TableContext.Provider value={{ data: props.data, start: props.start }}>
          <tbody {...props} />
        </TableContext.Provider>
      </div>
    </div>
  );
}

export default TableBody;
