import { ToTopOutlined } from '@ant-design/icons';
import { FloatButton, Tooltip } from 'antd';
import './App.css';
import About from './page/About';
import Header from './page/Header';
import Project from './page/Project';
function App() {

  return (
    <>
    <Header />
    <div id='body'>
      <About />
      <Project />
    </div>
    <Tooltip title='回到頂部'>
    <FloatButton icon={<ToTopOutlined />} href='#top' />
    </Tooltip>
    </>
  )
}

export default App
