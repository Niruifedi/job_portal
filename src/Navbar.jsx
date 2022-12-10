import React from 'react'

function Navbar() {
  return (
    
    <div className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900 sticky top-0 z-30 w-full shadow-xl'>
          <header className='container flex flex-wrap items-center justify-between mx-auto '> 
          <div>
            <div className='w-8 md:w-9 font-semibold md:text-4xl'>
              
              <a href="#">
                  <img src="favicon/favicon-32x32.png" alt="Nish Logo" className='w-9'/>
                </a>
              
            </div>
          </div>
          <div className='text-end text-white dark:text-slate-50'>
          <a href="#" className="mx-3 hover:opacity-50 duration-100">Log In</a> |
          <a href="#" className="mx-3 hover:opacity-50 duration-100">Sign Up</a> |
          <a href="#" className="mx-3 hover:opacity-50 duration-100">Post A Job</a>
          </div>
          </header>
        </div>  
  )
}

export default Navbar