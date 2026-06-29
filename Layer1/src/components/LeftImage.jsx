import { useState, useEffect } from "react";

const allModules = import.meta.glob('../assets/Album*/*.png', { eager: true });

const albums = [];
Object.entries(allModules).forEach(([path, module]) => {
    const albumNumber = parseInt(path.match(/Album(\d+)/)[1]) - 1;
    if (!albums[albumNumber]) albums[albumNumber] = [];
    albums[albumNumber].push(module.default);
});

function LeftImage({ albumIndex, onImageClick }){
    const [currIdx, setCurrIdx] = useState(0);

    useEffect(() => {
        setCurrIdx(0);
    }, [albumIndex]);

    const Images = albums[albumIndex];

    function goLeft(){
        setCurrIdx(currIdx - 1);
    }
    function goRight(){
        setCurrIdx(currIdx + 1);
    }

    return(
        <>
        <div style={{
            height:"70vh",
            width:"30vw",
            position:"relative",
            border:"3px solid white"
        }}>
        <img src={Images[currIdx]} onClick={() => onImageClick(Images[currIdx])} style={{
            width:"100%",
            height: "100%",
            objectFit: "cover",
            display:"block",
            cursor:"zoom-in"
        }}/>
        <button onClick={goLeft} disabled={currIdx === 0} style={{
            position:"absolute", left:"8px", top:"50%", transform:"translateY(-50%)",
            background:"none", border:"none", color:"rgba(255,255,255,0.4)",
            fontSize:"24px", cursor:"pointer"
        }}>
            <i className="fa-solid fa-arrow-left"></i>
        </button>

        <button onClick={goRight} disabled={currIdx === Images.length - 1} style={{
            position:"absolute", right:"8px", top:"50%", transform:"translateY(-50%)",
            background:"none", border:"none", color:"rgba(255,255,255,0.4)",
            fontSize:"24px", cursor:"pointer"
        }}>
            <i className="fa-solid fa-arrow-right"></i>
        </button>
        </div>
        </>
    )
}

export default LeftImage;
