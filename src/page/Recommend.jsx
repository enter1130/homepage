import { Divider, Result } from "antd"


function Recommend() {

  return (
    <div className='p-3'>
      <Divider orientation="left"><h1>AI 工具推薦</h1></Divider>
      <Result
        status={'info'}
        title={'建置中'}
        />
    </div>
  )
}

export default Recommend
