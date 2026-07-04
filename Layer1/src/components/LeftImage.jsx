import { useState, useEffect } from "react";

function LeftImage({ images, onImageClick }){
    const [currIdx, setCurrIdx] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setCurrIdx(0);
        setIsLoaded(false);
    }, [images]);

    useEffect(() => {
        function handleKeyDown(e) {
            if(e.key === 'ArrowLeft' && currIdx > 0) goLeft();
            if(e.key === 'ArrowRight' && currIdx < images.length - 1) goRight();
        }
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [currIdx, images]);

    function goLeft(){
        setCurrIdx(currIdx - 1);
        setIsLoaded(false);
    }
    function goRight(){
        setCurrIdx(currIdx + 1);
        setIsLoaded(false);
    }

    const src = `http://localhost:3000${images[currIdx]}`;

    return(
        <div className="h-[70vh] w-[30vw] relative">
            {!isLoaded && (
                <div className="absolute inset-0 animate-pulse" style={{ backgroundColor: "var(--powder-petal)" }}/>
            )}
            <img
                src={src}
                onLoad={() => setIsLoaded(true)}
                onClick={() => onImageClick(src)}
                className="w-full h-full object-cover block cursor-zoom-in"
            />
            <button onClick={goLeft} disabled={currIdx === 0}
                style={{ color: "var(--almond-silk)" }}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-transparent border-none text-2xl cursor-pointer transition-colors hover:opacity-100 opacity-70 disabled:opacity-20">
                <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button onClick={goRight} disabled={currIdx === images.length - 1}
                style={{ color: "var(--almond-silk)" }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent border-none text-2xl cursor-pointer transition-colors hover:opacity-100 opacity-70 disabled:opacity-20">
                <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    )
}

export default LeftImage;
