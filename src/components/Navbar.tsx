import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'
import { useClickTargetOutsite } from '../hooks'
const Navbar = () => {
  const [active, setActive] = useState('') // nav path 
  const [showMenu, setShowMenu] = useState(false) // mobile menu
  const menuRef = useRef(null)
  useClickTargetOutsite(menuRef, () => {
    showMenu && setShowMenu(false)
  })
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        <Link to="/" className='flex items-center gap-2'
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
          <p className='text-xl font-bold text-white cursor-pointer flex'>
            Cherry7 &nbsp;<span className='sm:block hidden'>| Website</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {
            navLinks.map(({ id, title }) => (
              <li key={id}>
                <Link to={id}
                  className={`${active === title ? 'text-white' : 'text-secondary'
                    } hover:text-white cursor-pointer font-medium text-lg`}
                  onClick={() => {
                    setActive(title)
                    window.scrollTo(0, 0)
                  }}
                >
                  {title}
                </Link>
              </li>
            ))
          }
        </ul>
        <div ref={menuRef} className='sm:hidden flex justify-end items-center'>
          <img src={showMenu ? close : menu} alt="menu" className='w-6 h-6 sm:hidden block cursor-pointer'
            onClick={() => {
              setShowMenu(isShow => !isShow)
            }}
          />
          <div className={`${!showMenu ? 'hidden' : 'flex'} p-6 black-gradient 
          absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {
                navLinks.map(({ id, title }) => (
                  <li key={id}>
                    <Link to={id}
                      className={`${active === title ? 'text-white' : 'text-secondary'
                        } hover:text-white cursor-pointer font-poppins font-medium text-md`}
                      onClick={() => {
                        setActive(title)
                        setShowMenu(false)
                        window.scrollTo(0, 0)
                      }}
                    >
                      {title}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </nav >
  )
}

export default Navbar
