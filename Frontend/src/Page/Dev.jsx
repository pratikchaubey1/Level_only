import React from 'react'
import { Link } from 'react-router-dom';

function Dev() {
  return (
    <div>
      <h1 className='text-center text-2xl mt-20'>
        You cannot purchase anything from here.<br />
        This is only a demo / trial website 🙂
      </h1>

      <div className='text-xl text-center font-mono mt-20'>
        <Link to="/" className="inline-block">
          <button className="relative group px-4 py-2 text-black font-semibold">
            CONTINUE SHOPPING

            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-500 group-hover:w-full"></span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Dev
