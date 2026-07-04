// import profilepic from '../assets/image.png';

function ProfilePic(){

    return(
        <>
        <div style={{ backgroundColor: "var(--almond-silk)" }} className="h-[100px] w-[100px] rounded-full flex justify-center items-center overflow-hidden flex-shrink-0">
            <img src={`http://localhost:3000${ProfilePic}`} className="w-full h-full object-cover" />
        </div>
        </>
    );
}

export default ProfilePic;