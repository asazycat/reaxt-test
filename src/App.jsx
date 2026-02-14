import { useState } from 'react'

import './App.css'
import ListSelect from './Components/ListSelect'

function App() {
  const [state, setState] = useState('USA')

  return (
    <>
    <ListSelect setState={setState} state={state}/>
    </>
  )
}

export default App
