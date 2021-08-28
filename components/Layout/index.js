import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ children }) => {
  return (
    <div className='mx-auto'>
      <div className='shadow-lg'>
        <Header />
      </div>

      <div className='container mx-auto'>
        {children}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout