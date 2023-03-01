import HomePage from './pages/HomePage'
import React from 'react'
import {Route,BrowserRouter,Routes,} from "react-router-dom";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Concertunic from './pages/Concertunic';
import London from './pages/London';
import Barcelona from './pages/Barcelona';
import Artist from './pages/Artist';
import ConcertForm from './pages/ConcertForm';
import NavDesktop from './components/NavDesktop';
import Footer from './components/Footer';
import PostProvider from './Context/concertsContext';
import Concertunicindie from './pages/Concertunicindie';
import NewConcert from './pages/NewConcert';
import MyConcerts from './pages/MyConcerts';
import { Toaster } from 'react-hot-toast';
import Cart from './pages/Cart';
import Indies from './pages/Indies';
const App = () => {
  return (
    <> 
    
   
     
     <PostProvider>
     <Toaster/>
      <NavDesktop/>
        <Routes>
         
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/Concertunic/:id' element={<Concertunic/>}/>
          <Route path='/Concertunicindie/:id' element={<Concertunicindie/>}/>
          <Route path='/London' element={<London/>}/>
          <Route path='/Barcelona' element={<Barcelona/>}/>
          <Route path='/Artist' element={<Artist/>}/>
          <Route path='/Indies' element={<Indies/>}/>
          <Route path='/ConcertForm' element={<ConcertForm/>}/>
          <Route path ='/NewConcert' element={<NewConcert/>}/>
          <Route path ='/concerts/update/:id' element={<NewConcert/>}/>
          <Route path ='/MyConcerts' element={<MyConcerts/>}/>
          <Route path ='/Cart' element={<Cart/>}/>
         
         </Routes>
         
         </PostProvider>
         
        
        <Footer/>
    
      
      

    </>
  )
}

export default App
