import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/icons/logo.svg'
import menu from '../../public/icons/menu.svg'

const Header = () => {
  return (
    <header className='py-4 flex items-center justify-between'>
      <div className='flex items-center justify-center'>
        <Image src={logo} alt='logo'/>
        <p className='text-2xl'>ShopDesk</p>
      </div>

      <ul className='flex gap-6 text-[16px] max-[800px]:hidden'>
        <li>
          <Link href='/features'>Features</Link>
        </li>
        <li>
          <Link href='/pricing'>Pricing</Link>
        </li>
        <li>
          <Link href='/blog'>Blog</Link>
        </li>
        <li>
          <Link href='/faq'>FAQ</Link>
        </li>
        <li>
          <Link href='/contact'>Contact Us</Link>  
        </li>
      </ul>

      <div className='flex items-center justify-center gap-4'>
        <button className='btn-outline max-[1000px]:hidden'>Sign In</button>
        <button className='btn-primary max-[1000px]:hidden'>Start for free</button>

        <button className='btn-primary min-[1000px]:hidden max-[500px]:hidden'>Get Started</button>

        <button className='min-[800px]:hidden'>
          <Image src={menu} alt='menu'/>
        </button>
      </div>

    </header>
  )
}

export default Header