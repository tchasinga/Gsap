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
    <div className='' ref={container}>
      
    </div>
  )
}
