"use client"
import React, { useState, useRef, useEffect } from 'react'
import './navdesign.css'
import Link from 'next/link'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const menu = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Contact', link: '/contact' },
  { name: 'Services', link: '/services' },
  { name: 'Blog', link: '/blog' },
  { name: 'Portfolio', link: '/portfolio' },
  { name: 'Shop', link: '/shop' },
  { name: 'Elements', link: '/elements' },
]

const Textchange = [
  { themer: 'Tchasinga' },
  { themer: 'Welcome' },
  { themer: 'About' },
  { themer: 'Contact' },
  { themer: 'Services' },
  { themer: 'Blog' },
  { themer: 'Portfolio' },
  { themer: 'Shop' },
  { themer: 'Elements' },
]

export default function Navbars() {
  const container = useRef()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentText, setCurrentText] = useState(0)
  const textRef = useRef()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    console.log(isMenuOpen)
  }

  const tl = useRef();
  useGSAP(() => {
    gsap.set(".menu-link-item-holder", { y: 75 });
    tl.current = gsap.timeline({ paused: true })
      .to(".menu-overlay", {
        duration: 2.25,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut"
      })
      .to(".menu-link-item-holder", {
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.inOut",
        delay: -0.25
      })
  }, { scope: container })

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play()
    } else {
      tl.current.reverse()
    }
  }, [isMenuOpen])

  // Handle text changes with animation
  useEffect(() => {
    const interval = setInterval(() => {
      const nextText = (currentText + 1) % Textchange.length

      // Animate the text out
      gsap.to(textRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: "power3.out",
        onComplete: () => {
          // Change the text and animate it back in
          setCurrentText(nextText)
          gsap.fromTo(
            textRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
          )
        }
      })
    }, 3000)

    return () => clearInterval(interval) // Cleanup the interval on component unmount
  }, [currentText])

  return (
    <div className='menu-container' id='famili' ref={container}>
      <div className="menu-bar">
        <div className="menu-logo">
          <Link href='/'>
            <span ref={textRef}>{Textchange[currentText].themer}</span>
          </Link>
        </div>

        <div className="menu-open" onClick={toggleMenu}>
          <p className='font-bold'>Menu</p>
        </div>
      </div>

      <div className="menu-overlay">
        <div className="menu-overlay-bar">
          <div className="menu-logo">
            <Link href='/'>Tchasinga</Link>
          </div>
          <div className="menu-close" onClick={toggleMenu}>
            <p className='font-bold'>Close</p>
          </div>
        </div>

        <div className="menu-close-icon" onClick={toggleMenu}>
          <p>&#x2715;</p>
        </div>

        <div className="menu-copy">
          <div className="menu-links">
            {menu.map((link, index) => (
              <div className="menu-link-item" key={index}>
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <Link href={link.link}>{link.name}</Link>
                </div>
              </div>
            ))}
          </div>

          <div className="menu-info">
            <div className="menu-info-col">
              <a href="#">X &#8599;</a>
              <a href="#">Instagram &#8599;</a>
              <a href="#">Facebook &#8599;</a>
              <a href="#">Twitter &#8599;</a>
              <a href="#">LinkedIn &#8599;</a>
            </div>

            <div className="menu-info-col">
              <p>Copyright © 2023 Tchasinga</p>
              <p>+254 75 32 75 299</p>
            </div>
          </div>
        </div>

        <div className="menu-preview">
          <p>View Showreel</p>
        </div>
      </div>
    </div>
  )
}
