import { useState } from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Content from './Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Header />
      <Content />
    </>
  )
}

export default App
