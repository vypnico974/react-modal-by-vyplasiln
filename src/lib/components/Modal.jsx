import React, { useEffect } from "react"
import "./modal.css"
import PropTypes from "prop-types"


export default function Modal({ id, showModal, closeModal, modal_styles, message }) {

    if (!modal_styles){
        modal_styles = {
            "backgroundColor": "rgb(187 245 193)",   
            "borderRadius": 10,
            "boxShadow": "rgb(5 60 9) 0px 0px 0px 2px",
            "color": "rgb(5 72 4)",
            "fontSize": 18,
            "height": "fit-content",
            "padding": "20px 50px",
            "width": "fit-content"
        }
    }

    
    const closeOnEscapeKeyDown = e => {
        if ((e.charCode || e.keyCode) === 27) {            
            closeModal()
        }
    }
    useEffect(() => {
        document.addEventListener("keydown", closeOnEscapeKeyDown);
        return function cleanup() {
          document.removeEventListener("keydown", closeOnEscapeKeyDown);
        }
    },)


    return (
        <>
            {
                showModal &&
                (
                <div className="modalContainer" onClick={closeModal} >
                    <div className="modal" id={id} style={modal_styles}>
                        <div className="modal-content">
                            <span className="modal-close" onClick={closeModal}>✖</span>
                            <span>{message}</span>
                        </div>
                    </div>
                </div>
                )              
            }
        </>
    ) 
}
Modal.propTypes = {
    id : PropTypes.string,
    showModal: PropTypes.bool.isRequired,
    closeModal:PropTypes.func.isRequired,
    modal_styles: PropTypes.object,
    message: PropTypes.string,
};