import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Card from '../Card/Card'
import SearchBar from './SearchBar'

const Browsebooks = () => {
  const {category}= useParams();

  const books = useSelector((state)=>state[category])||[]
  const[filterdbook,setFilterbook]=useState(books)
  const[value,setValue]=useState("")
  const[found ,setfound]=useState(false)


  useEffect(()=>(
    setFilterbook(books),
    setfound(false)
  ),[books,value])


  function handleClick(){
   let n =  value.trim().toLocaleLowerCase()
  const filterdbook = books.filter((e)=>e.title.toLowerCase()==n.toLocaleLowerCase()||e.author.toLowerCase()==n.toLowerCase())
  setFilterbook(filterdbook.length>0?filterdbook:books)
  setfound(filterdbook.length>0?false:true)
}



  return (
    <> <br />
    
    <SearchBar   msg={found} handleInput={(val)=>{setValue(val)}} handleClick={()=>{handleClick()}} value={value} />
    
     <br />
     <h1 className='text-3xl font-semibold text-green-700 text-center'>{books.length>0?`popular ${category} Books`:"Books not found"}  </h1>
     <div className='p-2 bg-slate-500 w-10/12 ml-28 mt-2'></div>
     <br />
     <section className='container  flex flex-wrap gap-5 ml-28'>
    {
        filterdbook.map((book)=>{
            return <Card id={book.id} category={category} key={book.id} coverImage={book.coverImage} title={book.title} />
        })
    }
    </section>
    </>
   
  )
}

export default Browsebooks