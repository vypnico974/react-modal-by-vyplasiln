import { useState } from "react"
import './App.css'
import Modal from './lib/components/Modal'


function App() {
 
    const [modal, setModal] = useState(false)
    const Toggle = () => setModal(!modal)
    
    return (
      <div className="App">
        <button className="clickme" onClick={() => Toggle()}>
          Modal
        </button>

        <Modal show={modal} />

      </div>
    )
}

export default App;
