import React, {useState} from "react";
import pictures from './imagedata'
import GalleryPic from "./GalleryPic";
import {Modal} from "./Modal"


export default function Main() {
    const [showAbout, setShowAbout] = useState(false);
    const [showGallery, setShowGallery] = useState(false);
    const [showContact, setShowContact] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    return (
        <div>
            <div className="Main">
            <div className="MainPic__container"><img id="MainPic" src="moi.jpg" alt="It me!"></img>
            </div>

            <div className="MainBody">
                <div className="MBSuperior"><h1>claire utrecht</h1></div>

                <div className="MBButtons">
                <button id = "Button__About" onClick = {() => {setShowAbout(true); setShowContact(false); setShowGallery(false)}}>home</button>

                <button id= "Button__Gallery" onClick = {() => {setShowAbout(false); setShowContact(false); setShowGallery(true)}}>gallery</button>
                <button id="Button__Contact" onClick={() => {setShowAbout(false); setShowContact(true); setShowGallery(false)}}>contact</button>
                </div>
            </div>
        </div>
        <div className="AltContent">
        
        {
            showAbout ?
            <div className="About">
            <div className="AboutDiv">
            <div className="HardCoded">
            <h2>Howdy, what's up!</h2>
                <p>i am claire</p>
                <p>it's quite a time</p>
                <p>sorry this page is like, under construction rn</p>
            </div>
            <div className="FunFacts">
                <h3>
                   here are some fast fun facts about me?
                </h3>
                <ul>
                    <li id="funfact"> 550+ day streak in Japanese DuoLingo as of 12/21/2022</li>
                    <li id="funfact">i play some guitar, not extremely well</li>
                    <li id="funfact">like to cook i guess</li>
                    <li id="funfact">i have a bunch of plants and like them a lot</li>
                    <li id="funfact">apparently i'm trying coding again too</li>
                </ul>
            </div>
            </div>
            </div>
            :
            <p></p>
        }

        {
            showGallery ?
            <div className="GalleryContainer">
                {pictures.map(picture => 
                    <button onClick={openModal}><GalleryPic 
                        src={picture.src}
                        alt={picture.alt}
                        /></button>
                        )}
                        { showModal ? <Modal setShowModal={setShowModal}/> : null}
            </div>
            :
            <p></p>
        }

        {
            showContact ?
            <div className="Contact">
                <h3>Please feel free to contact me by any of the means below.</h3>
            <div>personal email: utrechtc@gmail.com</div>
            <div>linkedin: https://www.linkedin.com/in/claireutrecht/</div>
            <div>discord: nabiya#6172</div>
            </div>
            :
            <p>     </p>
        }

        </div>
        </div>
    )
}