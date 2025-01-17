import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({id,title,coverImage,category}) => {
  return (
    <>
    <div key={id} className=' bg-green-700 rounded-md flex h-80 w-56 flex-col items-center '>
    <div className='p-1 rounded-md h-64 w-52'>
       <img src={coverImage} className='object-cover h-full w-full' alt="" />
    </div>


    <h1 className='font-bold font-mono text-lg text-white overflow-hidden'>{title}</h1>
   <Link to={`/bookdetails/${category}/${id}`}>
   <button className='p-1 bg-red-300 rounded-lg mb-1 '> View Details</button>
   </Link> 

    </div>
    </>
  )
}

export default Card