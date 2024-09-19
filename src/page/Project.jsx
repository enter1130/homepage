import { Divider } from "antd";

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

  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
    <div className='p-3 ' style={{minHeight:'500px'}}>
      <Divider orientation="left"><h1>Project</h1></Divider>
      {/* <Carousel autoplay>
        {project.map((item, index) => (
          <div style={contentStyle} className="border rounded" key={index}>
            <h3>{item.name}</h3>
            <a href={item.website} target="_blank" rel="noreferrer">前往網站</a>
          </div>
        ))}
      </Carousel> */}
    </div>
  )
}

export default Project
