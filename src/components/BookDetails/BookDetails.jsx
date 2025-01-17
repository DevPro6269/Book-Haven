import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetails = () => {
const {category,id}=useParams();
console.log(category,id);

const book = useSelector((state)=>state[category].filter((e)=>e.id==id))
console.log(book);

    const fullStars = Array(Math.floor(book[0].rating)).fill(true); 
  const emptyStars = Array(5 - Math.floor(book[0].rating)).fill(false);
  return (
    <>
    <section className='container flex justify-center gap-5'>
        <div className='flex flex-col gap-5 mt-16'>
            <img className='h-80 w-60' src={book[0].coverImage} alt="" />
            <button className='bg-green-600 p-2 text-white font-semibold  rounded-lg'> Want to read</button>
            <button className=' border-2 p-1 border-blue-500 rounded-lg'>Grab It </button>
        </div>
        <div className='w-2/4 mt-16 flex p-2 gap-6 flex-col'>
            <h1 className='font-bold text-5xl'>{book[0].title}</h1>
            <h1 className='text-slate-700' >{book[0].author} &nbsp; <i className="fa-solid fa-pen"></i></h1>
            <p>{book[0].description}</p>
            <p>Genres: <strong>{book[0].genre}</strong> </p>
            <p>First published in year {book[0].year}</p>
            <p className='text-3xl'>Rating:{
                fullStars.map((_,index)=>{
                    return <span key={index} className="fa fa-star  text-orange-400 text-3xl" ></span>
                })
                }
                {
                    emptyStars.map((_,index)=>(
                        <span key={index} className="fa fa-star text-3xl"></span>
                    ))
                }
           </p>
        </div>
    </section>
    </>
  )
}

export default BookDetails