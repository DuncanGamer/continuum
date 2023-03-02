
import 'alpinejs';
import {useState} from 'react'
import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { SearchBarContext }   from '../Context/SearchBar'
import { useContext } from 'react'





function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [searcher, setSearcher] = useState("");

  const handleInputChange = ({ target }) => { 
    setSearcher(target.value);
  }

  const handleSubmit = (e) => { 
    e.preventDefault(); 
  }
  
  const { concertlist, setConcertlist } = useContext(SearchBarContext);

  const getDataArtist = async () => {
    const response = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${searcher}&apikey=3GMPPIKJz782hBb4nOzleGmaFINv5lmV`);

    setConcertlist(response.data._embedded.events);
    console.log(response.data._embedded.events);
    console.log(concertlist);

    setSearcher("");
  }
  
  
  
  return (
    <form onSubmit={handleSubmit}>
    <div className="flex relative">
      <button
        type="button"
        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
        id="options-menu"
        aria-expanded="true"
        aria-haspopup="true"
        onClick={() => setIsOpen(!isOpen)}
      >
        Choose a city
        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M10 14l-5-5h10l-5 5z" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-10 lefth-0 mt-2 w-48 rounded-md shadow-lg bg-gray-100 ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        
            <a href="/London" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem"> London</a>
            <a href="/Barcelona" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Barcelona</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Paris</a>
          </div>
        </div>
      )}
      <div class="relative w-full">
            <input
            onChange={handleInputChange}
            value={searcher} 
            type="search" 
            id="search-dropdown" 
            className="block p-2.5 w-80 z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-orange-500 focus:gray-100  " 
            placeholder="Search " 
            required/>
            <button
            onClick={getDataArtist}
            type="submit" 
            className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-orange-500 rounded-r-lg border border-orange-700 hover:bg-orange-700 focus:outline-none ">
                <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span class="sr-only">Search</span>
            </button>
        </div>
    </div>
    </form>
  );
}

export default Dropdown;
