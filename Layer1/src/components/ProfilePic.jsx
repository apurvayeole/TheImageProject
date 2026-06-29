import profilepic from '../assets/image.png';

function ProfilePic(){

    return(
        <>
        <div style={{color:'red',
             backgroundColor:"black",
             height:"100px", 
             width:"100px",
             borderRadius:"50rem",
             display:"flex",
             justifyContent:"center",
             alignItems:"center",
             overflow: "hidden",
             flexShrink:0
             }}>
            <img src={profilepic} style={{
                width:"100%",
                height: "100%",
                objectFit: "cover"
            }}/>
        </div>
        </>
    );
}

export default ProfilePic;