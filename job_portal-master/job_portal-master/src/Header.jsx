import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <div className='header'>   
              
        <div className="  min-h-screen w-full h-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100"> 

        <Navbar/>


        <main className="container mx-auto px-6 pt-16 flex-1 text-center ">
          <h2 className="text-2xl md:text-3xl lg:text-4xl uppercase my-6">Connecting Job Seekers to</h2>
          <h2 className="text-2xl md:text-3xl lg:text-4xl  uppercase font-black mb-8">Opportunities</h2>

          <div className="text-2xl md:text-3xl lg:text-4xl py-2 px-4 md:py-4 md:px-6 lg:py-6 lg:px-8 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
            2,457 Jobs
          </div>

          <div className="flex flex-col md:flex-row justify-center mb-4">
						<input
							placeholder="Job title, keywords or company..."
							type="text"
							className="text-2xl placeholder:text-gray-400 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 md:rounded-tr-none md:rounded-br-none rounded-full outline-none mb-4 md:mb-0"
						/>
            <div className='bg-primary md:rounded-tl-none md:rounded-bl-none rounded-full text-2xl md:text-3xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 font-bold uppercase cursor-pointer hover:opacity-75 duration-150'>
              <span>Search</span>

            </div>
						
					</div>


          
        </main>

      </div>
    </div>
  )
}

export default Header