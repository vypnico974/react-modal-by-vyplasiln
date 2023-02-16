# react-modal-by-vyplasiln

> modal P14 openclassrooms

[![NPM](https://img.shields.io/npm/v/react-modal-by-vyplasiln.svg)](https://www.npmjs.com/package/react-modal-by-vyplasiln) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-modal-by-vyplasiln
```

## Usage

### Example



```jsx
import React, { Component } from 'react'

import { Modal } from 'react-modal-by-vyplasiln'
import 'react-modal-by-vyplasiln/dist/index.css'

const App = () => { 

  const [showModal, setShowModal] = useState(false)
  const Toggle = () => setShowModal(!showModal)

  // your modal style 
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
  
      {/*  modal parameters */}
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


