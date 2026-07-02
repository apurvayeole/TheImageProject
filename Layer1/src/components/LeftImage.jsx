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

    const[isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setCurrIdx(0);
    }, [albumIndex]);

    const Images = albums[albumIndex];

    useEffect(() => {
        function handleKeyDown(e) {
            if(e.key === 'ArrowLeft' && currIdx > 0){
                goLeft();
            }
            if(e.key === 'ArrowRight' && currIdx < Images.length - 1){
                goRight();
            }
        }

        document.addEventListener('keydown', handleKeyDown);

        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [currIdx]);

    function goLeft(){
        setCurrIdx(currIdx - 1);
        setIsLoaded(false);
    }
    function goRight(){
        setCurrIdx(currIdx + 1);
        setIsLoaded(false);
    }

    return(
        <>
        <div className="h-[70vh] w-[30vw] relative">
         {!isLoaded && (
            <div className="absolute inset-0 animate-pulse" style={{ backgroundColor: "var(--powder-petal)" }}/>
        )}
        <img src={Images[currIdx]} onLoad={() => setIsLoaded(true)} onClick={() => onImageClick(Images[currIdx])} className="w-full h-full object-cover block cursor-zoom-in"/>
        <button onClick={goLeft} disabled={currIdx === 0}
            style={{ color: "var(--almond-silk)" }}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-transparent border-none text-2xl cursor-pointer transition-colors hover:opacity-100 opacity-70 disabled:opacity-20">
            <i className="fa-solid fa-arrow-left"></i>
        </button>

        <button onClick={goRight} disabled={currIdx === Images.length - 1}
            style={{ color: "var(--almond-silk)" }}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent border-none text-2xl cursor-pointer transition-colors hover:opacity-100 opacity-70 disabled:opacity-20">
            <i className="fa-solid fa-arrow-right"></i>
        </button>
        </div>
        </>
    )
}

export default LeftImage;
