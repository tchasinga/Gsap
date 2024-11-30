"use client"
import React ,{useState , useEffect, useRef} from 'react'
import Link from 'next/link'
import './navdesign.css'

const menu = [
  {name: 'Home', link: '/'},
  {name: 'About', link: '/about'},
  {name: 'Contact', link: '/contact'},
  {name: 'Services', link: '/services'},
  {name: 'Blog', link: '/blog'},
  {name: 'Portfolio', link: '/portfolio'},
  {name: 'Shop', link: '/shop'},
  {name: 'Elements', link: '/elements'},
]

export default function Navbars() {

  const container = useRef()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='menu-container' ref={container}>
      <div className="menu-bar">
        <div className="menu-logo">
          <Link href='/'>Tchasinga</Link>
        </div>

        <div className="menu-open">
          <p>Menu</p>
        </div>
      </div>

{/* Second step */}
      <div className="menu-overlay">
        <div className="menu-overlay-bar">
          <div className="menu-logo"><Link>Tchasinga</Link></div>
          <div className="menu-close"><p>Close</p></div>
        </div>

        <div className="menu-close-icon">
          <p>&#x2715</p>
        </div>


        <div className="menu-copy">
          <div className="menu-links">{
             menu.map((link, index) =>(
              <div className="menu-link-item" key={index}>
                <div className="menu-link-item-holder">
                   <Link href={link.link}>{link.name}</Link>
                </div>
              </div>
             ))
            }
            </div>

          <div className="menu-info"></div>
        </div>

        <div className="menu-preview"></div>
      </div>

    </div>
  )
}
