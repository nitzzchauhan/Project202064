import React from 'react'

export default function Navbar() {
  return (
    <div className='bg-white'>
         <div className='flex items-center justify-between mx-auto max-w-7xl h-16' >

            <div><h1 className='text-2xl font-bold'>Job <span className='text-red-500'>Portal</span></h1></div>
            <div>
              <ul className='flex items-center gap-4'>
                <li>Browse</li>
                <li>Job</li>
                <li>Home</li>
              </ul>
            </div>
            <br />

        
            
        </div>     
    </div>
  )
}
