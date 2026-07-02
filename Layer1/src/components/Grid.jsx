
import ProfilePic from './ProfilePic';
import ProfileDes from './ProfileDes';
import NavLinks from './navLinks';

import albums from '../data/albums.json';
import { useNavigate } from 'react-router-dom';


function Grid(){
    const navigate = useNavigate();
    return(
        <>
         <div className="grid grid-cols-6 px-[clamp(1rem,8%,15rem)]">
            <div style={{
                display: "flex",
                // flexDirection: "row",
                justifyContent:"center",
                alignItems: "center",
                height:"20vh",
                width:"80vw",
                gap: "2.5rem",
                // border:"2px solid lightblue"
            }}>
                <ProfilePic style={{
                    position:"fix"
                }}/>
                <div style={{
                    display:"flex",
                    flexDirection:"column",
                    gap:"10px",
                    width:"300px",
                    minheight:"120px",
                    // border:"2px solid hotpink"
                }}>
                    <ProfileDes/>
                    <NavLinks/>
                </div>
            </div>
        </div>
        <div style={{
            // border:"3px solid green",
            display: "grid",
            paddingLeft:"clamp(1rem, 8%, 15rem)",
            paddingRight:"clamp(1rem, 8%, 15rem)",
            gridTemplateColumns: "repeat(6, 1fr)",
            // gap: "4px",
        }}>
            {albums.map((album,index) => (
                <div key={album.id} className="w-full aspect-[9/16] overflow-hidden">
                    <img src={new URL(`${album.coverImage}`, import.meta.url).href} alt={`grid-${album.id}`} 
                    onClick={() =>  navigate(`/album/${index}`)} 
                    className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-110"/>
                </div>
            ))}
        </div>  

        </>
    );
}

export default Grid;
