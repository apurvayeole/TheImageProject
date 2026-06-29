import post1 from '../assets/Album1/cover.png';
import post2 from '../assets/Album2/cover.png';
import post3 from '../assets/Album3/cover.png';
import post4 from '../assets/Album4/cover.png';
import post5 from '../assets/Album5/cover.png';
import post6 from '../assets/Album6/cover.png';
import ProfilePic from './ProfilePic';
import ProfileDes from './ProfileDes';
import NavLinks from './navLinks';

const images = [
    post1,post2,post3,post4,post5,post6
];

function Grid({onImageClick,index}){
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
            {images.map((img, index) => (
                <div key={index} style={{
                    // border:"3px solid yellow",
                    width: "100%",
                    
                    aspectRatio: "9 / 16",
                    overflow: "hidden"
                }}>
                    <img src={img} alt={`grid-${index}`} onClick={() => onImageClick(index)} style={{
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
