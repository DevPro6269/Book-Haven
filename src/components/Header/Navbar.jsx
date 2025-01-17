import React, { useState } from 'react'
import { NavLink , Link } from 'react-router-dom'

export const Navbar = () => {
 
  

  return (

    <>
     <div className='p-3 bg-black flex justify-between sticky top-0'>
        <div><a href="https://github.com/DevPro6269/Book-Haven" className='text-white'>GitHub-Link</a></div>
        <ul className='flex list-none text-white gap-5'>
         <NavLink to={"/"}>
          <li><i className="fa-solid fa-house" style={{color:"e4ebf7"}}>&nbsp;</i>Home</li>
         </NavLink>
         
            <li  className='relative group'  ><i className="fa-solid fa-book" style={{color:"f7f7f8"}}>&nbsp;</i>Browse-Books
             <div className={`bg-slate-300 absolute group-hover:block hidden w-32 top-6 p-2`}>
              <Link to={"/browsebooks/sciFiBooks"}><p className='hover:border-2 hover:bg-black p-1 hover:text-white'>Science</p></Link>

              <Link to={"/browsebooks/fictionBooks"}>
              <p className='hover:border-2 hover:bg-black p-1 hover:text-white' >Fiction</p>
              </Link>

              <Link to={"/browsebooks/nonFictionBooks"}>
              <p className='hover:border-2 hover:bg-black p-1 hover:text-white' >Non-Fiction</p>
              </Link>
             </div>
            </li>
         

         <NavLink to={"/Addbook"}>
            <li> <i className="fa-solid fa-cart-plus" style={{color:"f4f7fa"}}></i>&nbsp;Add New</li>
         </NavLink>
        </ul>
        <div className=' text-white mr-4'><p>Welcome Jhon &nbsp;<i className="fa-solid fa-user" style={{color:"#f0f2f4"}}></i> </p></div>

    </div>

    </>
   
  )
}
