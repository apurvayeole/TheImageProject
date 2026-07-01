import profilepic from '../assets/image.png';

function ProfilePic(){

    return(
        <>
        <div  className="bg-black h-[100px] w-[100px] rounded-full flex justify-center items-center overflow-hidden flex-shrink-0">
            <img src={profilepic}  className="w-full h-full object-cover"/>
        </div>
        </>
    );
}

export default ProfilePic;