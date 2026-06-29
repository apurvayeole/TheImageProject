import { useState } from "react";
import Grid from "./components/Grid.jsx";
import Layout from "./components/Layout.jsx";
import FullscreenImage from "./components/FullscreenImage.jsx";
function App(){
    const[showLayout, setShowLayout] = useState(false);
    const[selectedAlbum, setselectedAlbum] = useState(0);
    function handleImageClick(index){
        setselectedAlbum(index);
        setShowLayout(true);
    }
    if(showLayout){
        return <Layout albumIndex={selectedAlbum} onBack = {() => setShowLayout(false)}/>
    }else{
        return <Grid onImageClick= {handleImageClick} />
    }
  
}

export default App; 