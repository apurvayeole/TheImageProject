import FullscreenImage from "./FullscreenImage";
import LeftImage from "./LeftImage";
import RightInfo from "./RightInfo";


import { useParams, useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

function Layout(){
    const [albums, setAlbums] = useState([])

useEffect(() => {
    fetch('http://localhost:3000/api/albums')
        .then(res => res.json())
        .then(data => setAlbums(data))
}, [])

    const{id} = useParams();
    const navigate = useNavigate();
    
    let showAlbum = (Number(id));
    const [fullscreenSrc, setFullscreenSrc] = useState(null);
    const currentAlbum = albums[showAlbum];
    // function handleNavigation(){
    //     setShowAlbum(album.id);
    // }

    if(!currentAlbum) return (
        <div style={{ backgroundColor: "var(--linen)", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-mid)" }}>
            Loading...
        </div>
    )

    // function preImage(){
    //     if(showAlbum > 0 )
    //     setShowAlbum(showAlbum - 1);
    // }

    return(
        <>
        <div onClick={() => navigate('/')}
        style={{ backgroundColor: "var(--linen)" }}
        className="min-h-screen flex items-center justify-center relative px-16">
            {/* Left arrow button */}
            <button onClick={(e) => { e.stopPropagation(); if(showAlbum > 0) navigate(`/album/${showAlbum - 1}`) }}
            style={{ color: "var(--text-mid)" }}
            className="absolute left-4 bg-transparent border-none text-4xl cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                <i className="fa-solid fa-arrow-left"></i>
            </button>

            {/* Center block */}
            <div onClick={(e) => e.stopPropagation()} className="flex flex-row shadow-lg">
                <LeftImage images={currentAlbum.images} onImageClick={(src) => setFullscreenSrc(src)}/>
                <RightInfo album={currentAlbum}/>
            </div>

            {/* Right arrow button */}
            <button onClick={(e) => { e.stopPropagation(); if(showAlbum < albums.length - 1) navigate(`/album/${showAlbum + 1}`) }} style={{
                position: "absolute",
                right: "16px",
                background: "none",
                border: "none",
                color: "var(--text-mid)",
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