import React, {useRef} from "react";
import  ReactDOM  from "react-dom";
import GalleryPic from "./GalleryPic";
import pictures from './imagedata'


export const Modal = ( { setShowModal }, {src, alt}) => {
    // close modal when clicking outside it
    const modalRef = useRef();
    const closeModal = (e) => {
        if (e.target === modalRef.current) {
            setShowModal(false);
        }
    };

    //render the modal JSX in the poral div (need to back and create that!!!!)
    return ReactDOM.createPortal(
        <div className="container" ref={modalRef} onClick={closeModal}>
            <div className="modal">
                <GalleryPic src={src} alt={alt}/>
                <h2>Here's the modal I guess? lmao</h2>
                <button onClick={() => setShowModal(false)}>X</button>
            </div>
        </div>,
        document.getElementById("portal")
    );
};