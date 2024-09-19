import { FacebookFilled, GithubFilled, LinkedinFilled, MailFilled } from "@ant-design/icons"
import { Button, Col, Descriptions, Divider, Flex, Image, message, Row, Tag } from "antd"
import Title from "antd/es/typography/Title"

function About() {

  const tech=[
    {
      name:'React',
      color:'blue'
    },{
      name:'Laravel',  
      color:'red'
    },{
      name:'Node.js',
      color:'green'
    },{
      name:'Javascript',
      color:'orange'
    },{
      name:'Python',
      color:'cyan'
    },{
      name:'MySQL',
      color:'purple'
    },{
      name:'Deep Learning',
      color:'magenta'
    },{
      name:'Github',
      color:'geekblue'
    },{
      name:'Others',
      color:'gold'
    }
  ]

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
    messageApi.success('已複製到剪貼簿')
  }

  const [messageApi, contextHolder] = message.useMessage();

  return (
    <div className='p-3' style={{minHeight:'500px'}}>
      {contextHolder}
      <Divider orientation="left"><Title>關於我</Title></Divider>
      <Row justify={'center'} align={'stretch'} className="m-3">
        <Col xs={{flex: '100%',}} xl={{flex: '30%',}}  className="p-2 m-3 d-flex justify-content-center align-items-center">
            <Image size={200} className="border rounded" src='https://avatars.githubusercontent.com/u/77468739?v=4' />
        </Col>
        <Col xs={{flex: '100%',}} xl={{flex: '60%',}} className=" d-flex align-items-center justify-content-center">
          <div>
          <Descriptions className="p-2 mt-3" title={<Title level={3}>個人資料</Title>}>
            <Descriptions.Item labelStyle={{fontSize:'14pt'}} contentStyle={{fontSize:'14pt'}} label='中文姓名'>曾子航</Descriptions.Item>
            <Descriptions.Item labelStyle={{fontSize:'14pt'}} contentStyle={{fontSize:'14pt'}} label='英文姓名'>Chan Zi Hang</Descriptions.Item>
            <Descriptions.Item labelStyle={{fontSize:'14pt'}} contentStyle={{fontSize:'14pt'}} label="居住地">台灣</Descriptions.Item>
            <Descriptions.Item labelStyle={{fontSize:'14pt'}} contentStyle={{fontSize:'14pt'}} label="國籍">馬來西亞</Descriptions.Item>
            <Descriptions.Item labelStyle={{fontSize:'14pt'}} contentStyle={{fontSize:'14pt'}} label="學歷">國立成功大學資訊管理學系</Descriptions.Item>
            <Descriptions.Item labelStyle={{fontSize:'14pt'}} contentStyle={{fontSize:'14pt'}} label="專長">前端工程師</Descriptions.Item>
            <Descriptions.Item labelStyle={{fontSize:'14pt'}} contentStyle={{fontSize:'14pt'}} label="電郵">chanzihang0311@gmail.com</Descriptions.Item>
          </Descriptions>
          <Descriptions className="p-2 mt-3" title={<Title level={3}>自傳</Title>}>
            <Descriptions.Item labelStyle={{fontSize:'14pt'}} contentStyle={{fontSize:'14pt'}}>我是一位全端工程師，畢業於國立成功大學資訊管理學系，熱愛學習新技術，並且喜歡挑戰自己。</Descriptions.Item>
          </Descriptions>
          <Descriptions className="p-2 mt-3" title={<Title level={3}>技術</Title>}>
            <Descriptions.Item labelStyle={{fontSize:'14pt'}} contentStyle={{fontSize:'14pt'}}>
            <Flex gap="4px 0" wrap>
              {tech.map((item,index)=>(
                <Tag key={index} color={item.color} className="px-3" >{item.name}</Tag>
              ))}
              </Flex>
            </Descriptions.Item>
          </Descriptions>
          <Descriptions className="p-2 mt-3" title={<Title level={3}>聯絡方式</Title>}>
            <Flex gap="4px 0" wrap>
              <Button className="mx-1" type="primary" style={{textDecoration:'none'}} href="#email" onClick={()=>copyToClipboard('chanzihang0311@gmail.com')} icon={<MailFilled />}>Email</Button>
              <Button className="mx-1" type="primary" style={{textDecoration:'none'}} href="#github" icon={<GithubFilled />}>Github</Button>
              <Button className="mx-1" type="primary" style={{textDecoration:'none'}} href="#linkedin" icon={<LinkedinFilled />}>Linkedin</Button>
              <Button className="mx-1" type="primary" style={{textDecoration:'none'}} href="#facebook" icon={<FacebookFilled />}>Facebook</Button>
            </Flex>
          </Descriptions>
          </div>
        </Col>
      </Row>
      
    </div>
  )
}

export default About
