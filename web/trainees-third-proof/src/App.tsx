import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { LoginPage} from "./pages";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="header">
        <h2 className="header-text" >Academy 
          <span className="header-text__second">
            Store
          </span>
        </h2>
      </div>
      <LoginPage/>
    </div>
  )
}

export default App
