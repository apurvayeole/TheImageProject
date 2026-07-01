import FullscreenImage from "./FullscreenImage";
import LeftImage from "./LeftImage";
import RightInfo from "./RightInfo";
import albums from '../data/albums.json';

import { useState } from "react";

function Layout({onBack,album}){
    
    let [showAlbum, setShowAlbum] = useState(album.id - 1);
    const [fullscreenSrc, setFullscreenSrc] = useState(null);
    const currentAlbum = albums[showAlbum];
    function handleNavigation(){
        setShowAlbum(album.id);
    }

    function preImage(){
        if(showAlbum > 0 )
        setShowAlbum(showAlbum - 1);
    }

    function nextImage(){
        if(showAlbum < 5)
        setShowAlbum(showAlbum + 1);
    }
    return(
        <>
        <div onClick={onBack} 
        className="bg-[#121212] min-h-screen flex items-center justify-center relative px-16">
            {/* Left arrow button */}
            <button onClick={(e) => { e.stopPropagation(); preImage(); }} 
            className="absolute left-4 bg-transparent border-none text-white text-4xl cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                <i className="fa-solid fa-arrow-left"></i>
            </button>

            {/* Center block */}
            <div onClick={(e) => e.stopPropagation()} className="flex flex-row shadow-2xl">
                <LeftImage albumIndex={showAlbum} onImageClick={(src) => setFullscreenSrc(src)}/>
                <RightInfo album={currentAlbum}/>
            </div>

            {/* Right arrow button */}
            <button onClick={(e) => { e.stopPropagation(); nextImage(); }} style={{
                position: "absolute",
                right: "16px",
                background: "none",
                border: "none",
                color: "white",
                fontSize: "clamp(20px, 3vw, 36px)",
                cursor: "pointer",
                opacity: 0.7,
            }}>
                <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
        {fullscreenSrc && (
            <FullscreenImage src={fullscreenSrc} onClose={() => setFullscreenSrc(null)}/>
        )}
        </>
    )
}

export default Layout;