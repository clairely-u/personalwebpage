import React from "react";

export default function GalleryPic ({ src, alt} : {src: string; alt: string}) {
    return (
            <img className="GalleryPic" src={src} alt={alt}/>
    )
}

