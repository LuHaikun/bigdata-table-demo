import logo from './logo.svg';
import './App.css';
import { Tabs } from 'antd'
import NormalTable from './components/NormalTable'
import VirtualTable from './components/VirtualTable'
import 'antd/dist/antd.css'

function App() {
  return (
    <div className="App">
      <Tabs>
        <Tabs.TabPane tab="直接渲染" key="item-1">
          <NormalTable />
        </Tabs.TabPane>
        <Tabs.TabPane tab="虚拟滚动" key="item-2">
          <VirtualTable />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default App;
