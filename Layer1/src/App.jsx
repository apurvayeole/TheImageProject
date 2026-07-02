import { useState } from "react";
import Grid from "./components/Grid.jsx";
import Layout from "./components/Layout.jsx";
import albums from './data/albums.json';
import { Routes, Route } from "react-router-dom";
function App(){
    // const[showLayout, setShowLayout] = useState(false);
    // const[selectedAlbum, setselectedAlbum] = useState(albums[0]);
    // function handleImageClick(index){
    //     setselectedAlbum(albums[index]);
    //     setShowLayout(true);
    // }
    // if(showLayout){
    //     return (
    //         <div className="fade-in">
    //             <Layout album={selectedAlbum} onBack={() => setShowLayout(false)}/>
    //         </div>
    //     );
    // }else{
    //     return (
    //         <div className="fade-in">
    //             <Grid onImageClick={handleImageClick}/>
    //         </div>
    //     );
    // }
  
      return (
        <Routes>
            <Route path="/" element={<Grid/>}/>
            <Route path="/album/:id" element={<Layout albums={albums}/>}/>
        </Routes>
    );
}

export default App; 