import axios from "axios";

 

const api = "https://continuum-online-k7ew.vercel.app/"
// "http://localhost:3000/"


const AxiosCalls = async(state)=>{
    const peticion = await axios.get ("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=3GMPPIKJz782hBb4nOzleGmaFINv5lmV")
   
    state(peticion.data._embedded.events)
   console.log(peticion.data._embedded.events)
    
    
}

const LondonCall = async(state)=>{
    const peticion = await axios.get ("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=602&apikey=3GMPPIKJz782hBb4nOzleGmaFINv5lmV")
   
    state(peticion.data._embedded.events)
   console.log(peticion.data._embedded.events)
    
    
}
const BarcelonaCall = async(state)=>{
    const peticion = await axios.get ("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=502&apikey=3GMPPIKJz782hBb4nOzleGmaFINv5lmV")
   
    state(peticion.data._embedded.events)
   console.log(peticion.data._embedded.events)
    
    
}

const unicoevento = async (id,state) =>{
    const peticion = await axios.get (`https://app.ticketmaster.com/discovery/v2/events/${id}.json?classificationName=music&dmaId=324&apikey=3GMPPIKJz782hBb4nOzleGmaFINv5lmV`)
    state(peticion.data)
    console.log(peticion.data)
   
   
} 

const Simagen = async (id,state) =>{
    const peticion = await axios.get (`https://app.ticketmaster.com/discovery/v2/events/${id}.json?classificationName=music&dmaId=324&apikey=3GMPPIKJz782hBb4nOzleGmaFINv5lmV`)
    state(peticion.data.images[3].url)
    console.log(peticion.data.images[0].url)
   
   
}
const DataEvento = async (id,state) =>{
    const peticion = await axios.get (`https://app.ticketmaster.com/discovery/v2/events/${id}.json?classificationName=music&dmaId=324&apikey=3GMPPIKJz782hBb4nOzleGmaFINv5lmV`)
    state(peticion.data.dates.start)
    console.log(peticion.data.dates.start)
   
   } 

   const getIndieConcerts = async () => await axios.get (`${api}concerts/api/all-concerts`)

   const getUserConcerts = async (id) => await axios.get(`${api}user-concerts/conciertos/${id}`);

   const deleteConcertRequest = async (id) => await axios.post(`${api}concerts/delete-concerts/${id}`);

   const getConcertRequest = async (id) => await axios.get(`${api}concerts/api/concerts/${id}`);

   const getConcertIndieRequest = async (id,state) => 
   {const peticion = await axios.get(`${api}concerts/api/concerts/${id}`)
    console.log(peticion.data)
    state(peticion.data)
    }
    const getConcertIndieRequestImage = async (id,state) => 
   {const peticion = await axios.get(`${api}concerts/api/concerts/${id}`)
    console.log(peticion.data)
    state(peticion.data.image)
    }

  
   
   
   const createConcert = async (newconcert, ) => {
    
   
    const form = new FormData();
    for (let key in newconcert) {
        form.append(key, newconcert[key]);
    }
   return await axios.post (`${api}concerts/create-concerts`,form, {
  
        headers: {
            'Content-Type': 'multipart/form-data'}
    }) 
    
}
   




export {createConcert}
export {Simagen}
export {AxiosCalls,unicoevento }
export {DataEvento}
export {LondonCall}
export {BarcelonaCall}
export {getIndieConcerts}
export {getUserConcerts}
export {deleteConcertRequest}
export {getConcertRequest}
export {getConcertIndieRequest}
export {getConcertIndieRequestImage}