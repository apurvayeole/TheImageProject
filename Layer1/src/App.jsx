import { useState } from "react";
import Grid from "./components/Grid.jsx";
import Layout from "./components/Layout.jsx";
import FullscreenImage from "./components/FullscreenImage.jsx";
import albums from './data/albums.json';
function App(){
    const[showLayout, setShowLayout] = useState(false);
    const[selectedAlbum, setselectedAlbum] = useState(albums[0]);
    function handleImageClick(index){
        setselectedAlbum(albums[index]);
        setShowLayout(true);
    }
    if(showLayout){
        return <Layout album={selectedAlbum} onBack={() => setShowLayout(false)}/>
    }else{
        return <Grid onImageClick= {handleImageClick} />
    }
  
}

export default App; 