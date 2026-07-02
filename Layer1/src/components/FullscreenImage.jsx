import { useEffect, useRef } from "react";

function FullscreenImage({ src, onClose }){
    const divRef = useRef(null);

    // enter fullscreen as soon as component appears
    useEffect(() => {
        if(divRef.current){
            divRef.current.requestFullscreen();
        }

        // when user presses Esc, browser exits fullscreen and fires this event
        const handleChange = () => {
            if(!document.fullscreenElement){
                onClose();   // remove the component from screen
            }
        };
        document.addEventListener("fullscreenchange", handleChange);
        return () => document.removeEventListener("fullscreenchange", handleChange);
    }, []);

    function exitFullscreen(){
      if(document.fullscreenElement){
        document.exitFullscreen();
      }
    }
    return(
        <div ref={divRef} onClick={exitFullscreen} style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "var(--parchment)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <img src={src} onClick={(e) => e.stopPropagation()}style={{
                maxWidth: "100vw",
                maxHeight: "100vh",
                objectFit: "contain",
                cursor:"default",
            }}/>
        </div>
    );
}

export default FullscreenImage;
