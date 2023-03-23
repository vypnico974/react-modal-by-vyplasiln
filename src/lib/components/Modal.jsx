import React, { useEffect } from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'

const ModalStyles = styled.div`
    left: 50%;
    position: fixed;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
`

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,.35);
    opacity: 0.7;
    /* visibility: hidden; */
    transition: all .2s ease;
    z-index:2;
`

const ModalClose = styled.span`
    font-size: 25px;
    position: absolute;
    right: 5px;
    top: 5px;
    transition: 0.5s;
    :hover{
        cursor: pointer;
    }
`

export default function Modal({ id, showModal, closeModal, modal_styles, message }) {

     if (!modal_styles){
        modal_styles = {
        "backgroundColor": "rgb(187 245 193)",   
        "borderRadius": 10,
        "boxShadow": "rgb(5 60 9) 0px 0px 0px 2px",
        "color": "#000",  
        "fontSize": 24,
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
        <div>
            {
                showModal &&
                (
                <ModalContainer onClick={closeModal} >
                    <ModalStyles id={id} style={modal_styles}>
                        <div>
                            <ModalClose className="modal-close" onClick={closeModal}>✖</ModalClose>
                            <span>{message}</span>
                        </div>
                    </ModalStyles>
                </ModalContainer>
                )              
            }
        </div>
    ) 
}
Modal.propTypes = {
    id : PropTypes.string,
    showModal: PropTypes.bool.isRequired,
    closeModal:PropTypes.func.isRequired,
    modal_styles: PropTypes.object,
    message: PropTypes.string,
}