import { useState } from 'react'
import { TodoProvider } from './contexts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <TodoProvider> 

    </TodoProvider>
  )
}

export default App
