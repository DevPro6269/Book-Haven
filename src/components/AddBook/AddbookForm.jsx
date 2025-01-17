import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addbook } from '../../App/BookSlice';
import { useNavigate } from 'react-router-dom';

const AddbookForm = () => {

    const Navigate = useNavigate()


const [errors, SetErrors] = useState({});
const[form ,Setform]=useState({
   title:"",
   Author:"",
   Description:"",
   imageLink:"",
   Category:"",
   Year:""
})
const dispatch = useDispatch()

function handleInput(e){
  let value = e.target.value
  let feild = e.target.name
  Setform((prev)=>(
    {...prev,[feild]:value}
  ))
  SetErrors((prev)=>(
   {...prev,[feild]:""}
  ))
}

function handleSubmit(e){
e.preventDefault()
let error = {}
if(!form.title){
    error.title="Please Enter a correct Title"
}

if(!form.Author){
        error.Author="Please Enter a correct information"
}
if(!form.Description){
   
        error.Description="Please Enter a correct Description"
    
}
if(!form.imageLink){
        error.imageLink="Please Enter a correct Url"
}

if(!form.Category){
        error.Category="Please Select correct Category"
}

if(!form.Year){
        error.Year="Please Enter a  valid year"
}

if(Object.keys(error).length>0){
    SetErrors(error)
    console.log("error");
    return ;
}

dispatch(addbook({
    title: form.title,
    author: form.Author,
    year: form.Year,
    genre: "Historical",
    description: form.Description,
    coverImage: form.imageLink,
    category:form.Category
}))

Navigate(`/browsebooks/${form.Category}`)
console.log("added done");
}


  return (
   <>
   <br />
   <form action="" onSubmit={handleSubmit} className='mx-auto p-5   w-96 gap-2  rounded-md bg-[#f2efdf] flex flex-col border-2'>
    <h1 className='text-center text-2xl'>Add New Book</h1>
   <div>
   <label htmlFor="title" className={`${errors.title?"text-red-500":""}`} >{errors.title?errors.title:"Title"}</label> <br />
   <input type="text" onChange={handleInput} name='title'  id='title' value={form.title} placeholder='Ttile Name....' className='p-1 w-full h-10 rounded-md outline-none border-b-2 border-orange-950' />
   </div>


<div className=''>
<label htmlFor="auhtor" className={`${errors.Author?"text-red-500":""}`}>{errors.Author?errors.Author:"Author"}</label> <br />
<input type="text" id='author' name='Author' onChange={handleInput}  value={form.Author} placeholder='Auhtor Name....' className='p-1 w-full h-10 rounded-md outline-none border-b-2 border-orange-950' />
</div>

   
   <div>
   <label htmlFor="description"  className={`${errors.Description?"text-red-500":""}`} >{errors.Description?errors.Description:"Description"}</label> <br />
   <textarea name="Description" rows={3} onChange={handleInput}  value={form.Description} placeholder='write a description' className='w-full p-1 rounded-md outline-none border-b-2 border-orange-950' id="description"></textarea>
   </div>

    
   <div>
   <label htmlFor="image" className={`${errors.imageLink?"text-red-500":""}`} >{errors.imageLink?errors.imageLink:"Image-url"}</label> <br />
   <input type="text" id='image' name='imageLink'  onChange={handleInput} value={form.imageLink} placeholder='image link ' className='p-1 w-full h-10 rounded-md outline-none border-b-2 border-orange-950' />
   </div>


   <div>
   <label htmlFor="cate"  className={`${errors.Category?"text-red-500":""}`}  >{errors.Category?errors.Category:"Select a category"}</label> <br />
    <select name="Category" id="cate" onChange={handleInput}  value={form.Category} className='h-10 w-full'>
        <option  value="">Select a Book</option>
        <option value="fictionBooks">fictionBooks</option>
        <option value="nonFictionBooks">nonFictionBooks</option>
        <option value="sciFiBooks">sciFiBooks</option>
    </select>
   </div>


   <div>
   <label htmlFor="year"  className={`${errors.Year?"text-red-500":""}`}>{errors.Year?errors.Year:"Enter a year"}</label>  <br />
   <input type="number" id='year' name='Year'  value={form.Year} onChange={handleInput} placeholder='Published Year '  min={1900} max={2025} className='p-1 w-full h-10 rounded-md outline-none border-b-2 border-orange-950' />
   </div>



<button type='submit' className= 'p-2 w-full rounded-md bg-orange-950 text-white'>Add new Book</button>
   </form>
   </>
  )
}

export default AddbookForm