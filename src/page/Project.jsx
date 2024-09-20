import { Button, Card, Carousel, Divider } from "antd";
import Title from "antd/es/typography/Title";

function Project() {
  const project=[
    {
      name:'企業永續管理師',
      website:'https://esmm.hub-fintech-ncku.tw/',
      type:'companyProject',
    },{
      name:'淨零永續管理師',
      website:'https://nzmm.hub-fintech-ncku.tw/',
      type:'companyProject'
    },{
      name:'永續金融科技產學小聯盟',
      website:'https://sfta.ncku.org.tw/',
      type:'companyProject'
    },{
      name:'永續金融科技產學小聯盟ESG徵信系統',
      website:'https://esg-credit.ncku.org.tw/',
      type:'companyProject'
    },{
      name:'The 4th International Conference on Sustainable FinTech and Supply Chain Management',
      website:'https://conference.2023.hub-fintech-ncku.tw/',
      type:'companyProject'
    },{
      name:'第四屆永續金融科技與法遵監理國際趨勢與展望論壇',
      website:'https://forum.2023.hub-fintech-ncku.tw/',
      type:'companyProject'
    },{
      name:'論壇或演講票券網頁(建置中)',
      website:'https://github.com/enter1130/eticket',
      type:'sideProject'
    }
  ]

  return (
    <div className='p-3 ' style={{minHeight:'500px'}}>
      <Divider orientation="left"><h1>作品集</h1></Divider>
      <Carousel dots arrows autoplay>
        {project.map((item, index) => (
          <div key={index} className="d-flex justify-content-center align-items-center">
            <Card style={{height:'400px',width:'90%',margin:'50px',
              // backgroundImage:'url(https://picsum.photos/3000/2000)',backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover'
              }} className="border rounded">
                <Card.Meta
                  description={<div className="p-3 d-flex justify-content-end align-items-end">
                    <div className="text-end">
                      <Title level={1}>{item.name}</Title>
                      <div className="my-3">{item.type}</div>
                      <Button href={item.website} style={{textDecoration:'none'}} type={'primary'} target="_blank" rel="noreferrer">前往網站</Button>
                    </div>
                  </div>}
                />
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Project
