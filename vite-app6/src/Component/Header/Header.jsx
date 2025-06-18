import React from 'react'
import { Link } from 'react-router-dom'

function header() {
  return (
    <header className='shadow sticky z-50 top-0'>
      <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5'>
      <div className='flex flex-wrap justify-between items-center mx-auto mx-w-screen-xl'>
        <Link to='/' className='flex items-center'>
        <img src="https://static.vecteezy.com/system/resources/previews/047/656/219/non_2x/abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg" alt="" />
        
        </Link>
      </div>
      </nav>
    </header>
  )
}

export default header