/* react  */
import React, { useState } from 'react'
/* modal component   */
import Modal from './lib/components/Modal'


/**
 * @function App
 * @export
 * @description component for render the modal 
 * @return {HTMLElement} component generated HTML
 */
function App() {
 
    // needed to show/hide the modal
    const [showModal, setShowModal] = useState(false)
    const Toggle = () => setShowModal(!showModal)


    // your modal style
    // if modal_styles not defined, default modal style
    const modal_styles = {
      "backgroundColor": "rgb(187 245 193)",   
      "borderRadius": 10,
      "boxShadow": "rgb(5 60 9) 0px 0px 0px 2px",
      "color": "rgb(5 72 4)",
      "fontSize": 18,
      "height": "fit-content",
      "padding": "20px 50px",
      "width": "fit-content"
    }
    
    return (
      <div>
        <button onClick={() => Toggle()}>
        Clic to open Modal
        </button>
    
        
      {/*  modal parameters 
      showModal and closeModal are required*/}
        <Modal 
          id="modalEmployeeCreated"
          showModal={showModal}
          closeModal={() => setShowModal(false)}
          modal_styles={modal_styles}
          message="Employee Created !"
        />
      </div>
    )
}

export default App
