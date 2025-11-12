import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

export default function App() {

  const [actorsList, setActorList] = useState([])

  const endpointActor = "https://lanciweb.github.io/demo/api/actresses/"
  const endpointActress = "https://lanciweb.github.io/demo/api/actresses/"

  function getDataActor() {
    axios.get(endpointActor)
      .then(res => setActorList(res.data))
      ;
  }

  useEffect(getDataActor, [])


  return (
    <>
      <header className='bg-dark'>
        <h1 className='text-white text-center py-4'>ACTORPEDIA</h1>
        <button onClick={() => console.log(actorsList)}></button>
      </header>
    </>
  )
}
