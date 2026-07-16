
import ProfilePic from './ProfilePic';
import ProfileDes from './ProfileDes';
import NavLinks from './navLinks';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Grid(){
    const [albums, setAlbums] = useState([])

useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/albums`)
        .then(res => res.json())
        .then(data => setAlbums(data))
}, [])


    const navigate = useNavigate();
    return(
        <div style={{ backgroundColor: "var(--linen)", minHeight: "100vh" }}>
         <div className="px-[clamp(1rem,8%,15rem)]">
            <div style={{
                display: "flex",
                justifyContent:"center",
                alignItems: "center",
                height:"20vh",
                gap: "2.5rem",
            }}>
                <ProfilePic/>
                <div style={{
                    display:"flex",
                    flexDirection:"column",
                    gap:"10px",
                    maxWidth:"300px",
                }}>
                    <ProfileDes/>
                    <NavLinks/>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 px-[clamp(1rem,8%,15rem)]">
            {albums.map((album,index) => (
                <div key={album.id} className="w-full aspect-[9/16] overflow-hidden">
                    <img src={`${import.meta.env.VITE_API_URL}${album.coverImage}`}
                    onClick={() =>  navigate(`/album/${index}`)} 
                    className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-110"/>
                </div>
            ))}
        </div>

        </div>
    );
}

export default Grid;
