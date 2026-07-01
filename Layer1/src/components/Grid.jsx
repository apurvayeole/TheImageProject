
import ProfilePic from './ProfilePic';
import ProfileDes from './ProfileDes';
import NavLinks from './navLinks';

import albums from '../data/albums.json';


function Grid({onImageClick}){
    return(
        <>
         <div style={{
            display:"flex",
            paddingTop:"5rem",
            // alignItems: "center",
            justifyContent:"center",
            height:"50vh",
            border: "2px solid violet",
        }}>
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
            {albums.map((album) => (
                <div key={album.id} style={{
                    // border:"3px solid yellow",
                    width: "100%",
                    
                    aspectRatio: "9 / 16",
                    overflow: "hidden"
                }}>
                    <img src={new URL(`${album.coverImage}`, import.meta.url).href} alt={`grid-${album.id}`} onClick={() => onImageClick(album.id - 1)} style={{
                        // border:"3px solid blue",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        cursor: "pointer"
                    }}/>
                </div>
            ))}
        </div>  

        </>
    );
}

export default Grid;
