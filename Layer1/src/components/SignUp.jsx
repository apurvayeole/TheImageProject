import react from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function SignUp(){
    const navigate = useNavigate();
    const[formData, setFromData] = useState(() => {
        try{
        const saved = localStorage.getItem("formData");
        if(!saved){
            return {username:"", email:"", password:""};
        }else{
            return JSON.parse(saved);
        }
    }catch{
        return {username:"", email:"", password:""};
    }
});

    useEffect(() => {
        localStorage.setItem("formData",JSON.stringify(formData));
    })

    function handleChange(e){
        const {name, value} = e.target;
        setFromData((prev) => ({
            ...prev,
            [name]:value,
        }));
    }

    async function onSubmit(e){
        e.preventDefault();
        const response = await fetch(`${import.meta.env.VITE_API_URL}/signup`,{
            method : "post",
            headers:{
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(formData),
        })
        const data = await response.json();
        console.log("server responded frontend", data);
        navigate("/login");

    }
   
    const inputStyle = {
        padding: "10px 12px",
        borderRadius: "6px",
        border: "1px solid var(--dust-grey)",
        backgroundColor: "var(--linen)",
        color: "var(--text-dark)",
        fontSize: "0.95rem",
        outline: "none",
        width: "100%",
    };

    return(
        <>
        <div style={{ backgroundColor: "var(--linen)", minHeight: "100vh" }}
             className="flex items-center justify-center px-4">
            <div style={{ backgroundColor: "var(--parchment)", border: "1px solid var(--dust-grey)" }}
                 className="w-full max-w-sm p-8 flex flex-col gap-5 shadow-lg">
                <h2 style={{ color: "var(--text-dark)", fontFamily: "cursive", margin: 0 }}
                    className="text-2xl text-center">
                    Create Account
                </h2>
                <form className="flex flex-col gap-4">
                <input style={inputStyle} onChange={handleChange}type="text" name="username" placeholder="username" value = {formData.username}>
                </input>
                <input style={inputStyle} onChange={handleChange} type="email" name="email" placeholder="email" value = {formData.email}>
                </input>
                <input style={inputStyle} onChange={handleChange} type="password" name="password" placeholder="password" value = {formData.password}>
                </input>
                </form>
                <button onClick = {onSubmit}
                    style={{
                        backgroundColor: "var(--text-dark)",
                        color: "var(--linen)",
                        border: "none",
                        borderRadius: "6px",
                        padding: "10px",
                        fontSize: "0.95rem",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                    }}
                    className="cursor-pointer transition-opacity hover:opacity-90">
                    Submit
                </button>
            </div>
        </div>
        </>
    )
}

export default SignUp;