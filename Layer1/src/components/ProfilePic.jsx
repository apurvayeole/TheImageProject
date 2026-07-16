
function ProfilePic(){

    return(
        <>
        <div style={{ backgroundColor: "var(--almond-silk)" }} className="h-[100px] w-[100px] rounded-full flex justify-center items-center overflow-hidden flex-shrink-0">
            <img src={`${import.meta.env.VITE_API_URL}/ProfilePic.png`} className="w-full h-full object-cover" />
        </div>
        </>
    );
}

export default ProfilePic;