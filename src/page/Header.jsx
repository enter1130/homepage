
import Marquee from 'react-fast-marquee'
import Hello from '../assets/hello.json'

function Header() {

  return (
    <div id='top' className='bg-dark text-light p-3'>
    <Marquee>
      {Hello.map((item, index) => (
        <span className='px-3' key={index}>{item.hello}</span>
      ))}
    </Marquee>
    </div>
  )
}

export default Header
