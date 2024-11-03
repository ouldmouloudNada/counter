import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './componment/Counter/Counter'

function App() {
  return (
    <>
       <div style={{ backgroundColor: '#F0A077', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
       <Counter/>
       </div>
  
    </>
  )
}

export default App
