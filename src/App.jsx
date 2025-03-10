import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Priyash from './Component/Priyash'
import { people } from './data'
import Priyash1 from './Component/Priyash1'
import Priyash2 from './Component/Priyash2'

function App() {

  return (
    <>
    {/* {
      people.map((e)=>{
        return<Priyash1 id={e.id} name={e.name} email={e.email} age={e.age}/>
      })

    } */}
    {/* <Priyash/> */}

    {/* <Priyash/> */}
    {/* {
      people.map((e)=>{
        return<Priyash1 id={e.id} name={e.name} email={e.email} age={e.age} key={e.id}/>
      })
    } */}
    <Priyash2/>
 
    </>
  )
}

export default App
