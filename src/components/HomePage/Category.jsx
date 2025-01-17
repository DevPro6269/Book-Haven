import React from 'react'
import { Link } from 'react-router-dom'
// Adjust the path to where the image is located

const Category = () => {
  return (
    <>
    <br /> <br />
    <h1 className='text-center text-3xl'>Shop By Category</h1>
    <div className='bg-yellow-300 p-2 w-3/5 mx-auto mt-5'></div>

    <br /> <br />
    <section className='container flex gap-12 mx-auto justify-center'>
       <Link to={"/browsebooks/fictionBooks"} >
       <div className='flex flex-col justify-center'>
            <img src="https://images.gr-assets.com/blogs/1734629367p8/2866.jpg" className='h-60 w-60 rounded-full' alt="" />
            <h1 className='font-semibold text-2xl mx-auto mt-6 underline'>Fiction Books</h1>
        </div>
       </Link>


       <Link to={"/browsebooks/sciFiBooks"}>
        <div className='bg-black h-60 w-60 rounded-full'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7aUU_-wkSj27H5_2Sl-IW91O8POxZuU3Vfw&s" className='h-full w-full rounded-full' alt="" />
            <h1 className='font-semibold text-2xl ml-12 mt-6 underline'>Sci-Fic Books</h1>
        </div>
       </Link>

       <Link to={"/browsebooks/nonFictionBooks"} >
        <div className='bg-black h-60 w-60 rounded-full'>
            <img src="https://francinemassue.weebly.com/uploads/1/3/0/9/13091251/nf_orig.jpg" className='h-full w-full rounded-full' alt="" />
            <h1 className='font-semibold text-xl ml-10 mt-6 underline'>Non-Fiction Books</h1>
        </div>
       </Link>
    </section>

    <div className='bg-yellow-300 p-2 w-3/5 mx-auto mt-2'></div>
    <br /> <br />
    </>
  )
}

export default Category