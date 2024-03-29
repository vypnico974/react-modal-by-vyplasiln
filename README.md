# react-modal-by-vyplasiln

> modal P14 openclassrooms

[![NPM](https://img.shields.io/npm/v/react-modal-by-vyplasiln.svg)](https://www.npmjs.com/package/react-modal-by-vyplasiln) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## About

A simple modal React component.
Keep the default theme or chose your modal style.

Example : [link](https://vypnico974.github.io/react-modal-by-vyplasiln/)

## Resource

[Creating an npm package from my REACT Component](https://www.elitmus.com/blog/technology/creating-an-npm-package-from-my-react-component/)

## License

MIT © [vypnico974](https://github.com/vypnico974)


## Install

```bash
npm install --save react-modal-by-vyplasiln
```

## Usage -example : App.jsx

```jsx
/* react  */
import React, { useState } from 'react'
/* modal component   */
import { Modal } from 'react-modal-by-vyplasiln'

const App = () => { 

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
















