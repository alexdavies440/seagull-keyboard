import { useState } from 'react'
import seagull42 from './assets/seagull42.jpeg'
import Keyboard from './components/Keyboard'

function App() {

  return (
    <>
    <div className='title'>
      <h1>Seagull Keyboard</h1>
      <img src={seagull42} alt="fierce seagull squawking at onlookers" />
    </div>
    <div>
      <Keyboard />
    </div>
    
    </>
  )
}

export default App
