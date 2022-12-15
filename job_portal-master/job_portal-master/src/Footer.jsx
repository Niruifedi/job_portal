import React from 'react'

function Footer() {
  return (
    <footer className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between text-black font-semibold sticky top-[100vh]">

        <div className="flex -mx-6">
          <a href="#" className="mx-3 hover:opacity-50 duration-100">About Us</a> |
          <a href="#" className="mx-3 hover:opacity-50 duration-100">Privacy Policy</a> |
          <a href="#" className="mx-3 hover:opacity-50 duration-100">Contact</a>
          
        </div>

        <p>&copy; 2022 Nish</p>

    </footer>
  )
}

export default Footer