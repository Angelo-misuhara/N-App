import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [openBurger,setOpenburger] = useState(false)
  const Links = [
    {
      link: '/Food',
      name: 'Food'
    },
    {
      link: '/Politics',
      name: 'Politics'
    },
    {
      link: '/Entertainment',
      name: 'Fashion'
    },
    {
      link: '/Sport',
      name: 'Sports'
    },
    {
      link: '/',
      name: 'World'
    },
  ]

  const openBurg = () => {
    setOpenburger(!openBurger)
  }
  return (
    <>
        {/* PcView */}
      <div className='flex p-2 pt-2 flex-row justify-between px-9 bg-gray-600 flex-wrap' id='pcNav'>
        <div className="mt-1">
          <img src="/img/icon32px.png" alt="icon" />
        </div>
        <div className='flex flex-row  gap-11 mt-2'>
          {Links.map((link) => 
            <Link to={link.link} key={uuidv4()}>
              <strong className='hover:text-gray-900'>{link.name}</strong>
            </Link>
          )}
        </div>
      </div>
      {/* phoneView */}
      <div className='hidden flex-col pt-2 bg-gray-600 p-2 pb-2' id='phoneView'>
        <div className='flex flex-row justify-between '>
            <div>
              <img src="img/icon32px.png" alt="" />
            </div>
            <div>
              <h1 className='font-bold'>News-Now</h1>
            </div>
            <div>
              <img src={openBurger ? 'img/reject32px.png': 'img/hamburger32px.png'} alt="" onClick={() => openBurg() }/>
            </div>
        </div>
         {/* burger Menu */}
      <div className='hidden bg-gray-600 pt-2'id='burgerMenu'>
        {openBurger && <>
          <ul className='flex flex-col gap-2 p-2 pt-3'>
            {Links.map((link) => 
            <Link to={link.link} key={uuidv4()}>
              <strong className='hover:text-gray-900'>{link.name}</strong>
            </Link>
          )}
          </ul>
        </>}
      </div>
      </div>
    </>
  )
}

export default Navbar