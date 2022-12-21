import React from "react";

export default function GalleryPic ({ src, alt} : {src: string; alt: string}) {
    return (
            <img className="GalleryPic" src={src} alt={alt}/>
    )
}

// The modal is appearing outside of the main div.
// probably goint to somehow need to use div here.