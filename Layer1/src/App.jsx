import { useState,useEffect } from "react";
import Grid from "./components/Grid.jsx";
import Layout from "./components/Layout.jsx";
import SignUp from "./components/SignUp.jsx";
import LogIN from "./components/LogIn.jsx";
import Upload from "./components/Upload.jsx";
import { Routes, Route } from "react-router-dom";
function App(){
    const [albums, setAlbums] = useState([])

// useEffect(() => {
//     fetch('http://localhost:3000/api/albums')
//         .then(res => res.json())
//         .then(data => setAlbums(data))
// }, [])
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
            <Route path="/home" element={<Grid/>}/>
            <Route path="/album/:id" element={<Layout albums={albums}/>}/>
            <Route path="/signup" element={<SignUp/>}></Route>
            <Route path="/login" element={<LogIN/>}></Route>
            <Route path = "/upload-album" element={<Upload/>}></Route>

        </Routes>
    );
}

export default App; 