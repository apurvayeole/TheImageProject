import albums from '../data/albums.json';

function RightInfo({album}){
    return(
        <>
        <div style={{
            backgroundColor:"#1e1e1e",
            color:"white",
            height:"70vh",
            width:"30vw",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "12px",
            border:"3px solid red",
        }}>
            <h3>Title:1:{album.title}</h3>
            <p>Description of Image:{album.description}</p>
            <p>Camera Information</p>

        </div>
        
        </>
    )
}

export default RightInfo;