import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Header from './components/Header'
import Main from './components/Main'

export default function App() {

  const endpointActor = "https://lanciweb.github.io/demo/api/actors/"
  const endpointActress = "https://lanciweb.github.io/demo/api/actresses/"

  const [actorsList, setActorList] = useState([])

  function getDataActor() {
    axios.get(endpointActor)
      .then(res => setActorList(res.data))
      ;
  }

  useEffect(getDataActor, [])


  return (
    <>
      <Header />
      <Main actorsList={actorsList} />
    </>
  )
}
