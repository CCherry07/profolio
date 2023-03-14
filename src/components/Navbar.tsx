import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'
import { useClickTargetOutsite } from '../hooks'
const Navbar = () => {
  const [active, setActive] = useState('/') // nav path 
  const [showMenu, setShowMenu] = useState(false) // mobile menu
  const { t, i18n } = useTranslation()
  const handleChanegI18n = () => {
    const lang = i18n.language === 'en' ? 'zh' : 'en'
    i18n.changeLanguage(lang)
  }
  useEffect(() => {
    const hashName = window.location.hash.slice(1)
    if (hashName) {
      setActive(hashName[0].toUpperCase() + hashName.slice(1))
    }
  }, [])

  const menuRef = useRef(null)
  useClickTargetOutsite(menuRef, () => {
    showMenu && setShowMenu(false)
  })
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 backdrop-filter backdrop-blur-md`}
      style={{ backgroundColor: 'rgba(0,0,0,0.2)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}
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
            Cherry7 &nbsp;<span className='sm:block hidden'>| {t('Introduction')}</span>
          </p>
        </Link>
        <div className='flex  items-center gap-5'>
          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {
              navLinks.map(({ id, title }) => (
                <li key={id}>
                  <a href={`#${id}`}
                    className={`${active === title ? 'text-white' : 'text-secondary'
                      } hover:text-white cursor-pointer font-medium text-lg`}
                    onClick={() => {
                      setActive(title)
                      window.scrollTo(0, 0)
                    }}
                  >
                    {title}
                  </a>
                </li>
              ))
            }
          </ul>
          <div className="w-5 h-5" onClick={handleChanegI18n}>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24" data-v-0ebb37a4="" className='w-5 h-5 fill-white'>
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ">
              </path>
            </svg>
          </div>
        </div>
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
                    <a href={`#${id}`}
                      className={`${active === title ? 'text-white' : 'text-secondary'}
                       hover:text-white cursor-pointer font-poppins font-medium text-md`}
                      onClick={() => {
                        setActive(title)
                        setShowMenu(false)
                        window.scrollTo(0, 0)
                      }}
                    >
                      {title}
                    </a>
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
