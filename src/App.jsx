import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Header/Navbar'
import store from './App/Appstore'
import { Provider } from 'react-redux'
import { Home } from './components/HomePage/Home'
import BookDetails from './components/BookDetails/BookDetails'
import Browsebooks from "./components/Browsebooks/Browsebooks"
import AddbookForm from './components/AddBook/AddbookForm'
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom'



function App() {
  
  return (
    <>
      <Navbar />
      <Outlet/>
    </>
  )
}

export default App
