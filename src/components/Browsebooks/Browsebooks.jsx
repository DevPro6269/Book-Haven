import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Card from '../Card/Card'
import SearchBar from './SearchBar'

const Browsebooks = () => {
  const {category}= useParams()
  const books = useSelector((state)=>state[category])
  const[filterdbook,setFilterbook]=useState(books)
  const[value,setValue]=useState("")
  
  useEffect(()=>(
    setFilterbook(books)
  ),[books])


  function handleClick(){
  const filterdbook = books.filter((e)=>e.title.toLowerCase()==value.toLocaleLowerCase()||e.author.toLowerCase()==value.toLowerCase())
  if(filterdbook.length>0){
    setFilterbook(filterdbook)
  }else{
    setFilterbook(books)
  }
}



  return (
    <> <br />
    
    <SearchBar  handleInput={(val)=>{setValue(val)}} handleClick={()=>{handleClick()}} value={value} />
    
     <br />
     <h1 className='text-3xl font-semibold text-green-700 text-center'>{`popular ${category} Books`}</h1>
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