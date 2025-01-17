import React from 'react'

const SearchBar = ({
    value,
    handleInput,
    handleClick,
    msg,
}) => {

    
  return (
    <>
   <section className='flex justify-center gap-2'>
   <div className='border-2 border-black w-fit'>
            <input type="text" placeholder='search book..' value={value} onChange={(e)=>handleInput(e.target.value)} className='outline-none p-1 h-8' />
            <div className=' p-1 inline-block '><i className="fa-solid fa-magnifying-glass"></i></div>
    </div>
    <button className='bg-blue-500 p-2 inline-block rounded-md'onClick={()=>handleClick(value)} >Search</button>
    <span className='p-1 text-lg font-extralight'>{msg&&"Book not found! Try again.."}</span>
   </section>
   
    </>
  )
}

export default SearchBar