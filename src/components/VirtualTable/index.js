import { useRef, useMemo, useState } from "react";
import { Table } from "antd";
import TableBody from "./TableBody";

const ITEM_HEIGHT = 50; // 每⾏⾼度
const SCROLL_HEIGHT = 500; // 滚动区域⾼度
const showNum = Math.ceil(SCROLL_HEIGHT / ITEM_HEIGHT); // 显⽰的数量
const columns = [
  {
    title: "Full Name",
    width: 100,
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    width: 100,
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Column 1",
    dataIndex: "address",
    key: "1",
    width: 150,
  },
  {
    title: "Column 2",
    dataIndex: "address",
    key: "2",
    width: 150,
  },
  {
    title: "Column 3",
    dataIndex: "address",
    key: "3",
    width: 150,
  },
  {
    title: "Column 4",
    dataIndex: "address",
    key: "4",
    width: 150,
  },
  {
    title: "Column 5",
    dataIndex: "address",
    key: "5",
    width: 150,
  },
  {
    title: "Column 6",
    dataIndex: "address",
    key: "6",
    width: 150,
  },
  {
    title: "Column 7",
    dataIndex: "address",
    key: "7",
    width: 150,
  },
  {
    title: "Column 8",
    dataIndex: "address",
    key: "8",
  },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,
    render: () => <a>action</a>,
  },
];

function VirtualTable() {
  const tableRef = useRef();
  const data = useMemo(() => {
    const data = [];
    for (let i = 0; i < 10000; i++) {
      data.push({
        key: i,
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`,
      });
    }
    return data;
  }, []);
  const [start, setStart] = useState(0); //开始渲染的位置
  const totalHeight = data.length * ITEM_HEIGHT; // 总⾼度

  const dataList = data.slice(start, start + showNum);
  return (
    <Table
      rowKey="key"
      ref={tableRef}
      columns={columns}
      dataSource={dataList}
      scroll={{
        x: 1500,
        y: 500,
      }}
      components={{
        body: {
          // 重写body属性
          wrapper: (props) => (
            <TableBody
              data={data}
              {...props}
              start={start}
              setStart={setStart}
              totalHeight={totalHeight}
              tbody={tableRef}
            />
          ),
        },
      }}
      pagination={false}
    />
  );
}

export default VirtualTable;
