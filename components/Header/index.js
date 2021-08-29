import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='bg-gray-200 shadow-lg'>
      <div className='container mx-auto p-4'>
        <a href='/'>
          <img className='h-24 mx-auto' src='/logo_palpitebox.png' alt='Palpite Box' />
        </a>
      </div>
      <div className='mx-auto text-center shadow-inner p-3'>
        <Link href='/contato'>
          <a className='pr-4'>Contato</a>
        </Link>
        <Link href='/sobre'>
          <a className='pr-4'>Sobre</a>
        </Link>
      </div>
    </div>
  )
}

export default Header