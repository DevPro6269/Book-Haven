import { createSlice,nanoid } from "@reduxjs/toolkit";
import Books from "../Utils/Books"

const BookSlice = createSlice({
    name:"book",
    initialState:{
        fictionBooks: Books.fictionBooks || [],
    nonFictionBooks: Books.nonFictionBooks || [],
    sciFiBooks: Books.sciFiBooks || [],
    popularBooks: Books.popularBooks || [],
    },
    reducers:{
        addbook:function(state,action){
            let {title,author,category,description,year,coverImage}=action.payload
            let book = {
                id: nanoid(),
                title: title,
                author: author,
                year: year,
                genre: "genre",
                description: description,
                coverImage: coverImage,
                rating:(Math.random() * 4 + 1).toFixed(1)
            }
            
            console.log(category);
            if(category){
                
                state[category].push(book)
            }
        }
    }
})

export const{addbook} = BookSlice.actions;

export default BookSlice;