import react from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function LogIN(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState(() =>({
        email: '',
        password : '',
    }))

    function handleChange(e){
        const {name,value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]:value,
        })
          );
    }

    async function onSubmit(e){
        e.preventDefault();
        try{
        const response = await fetch("http://localhost:3000/login" ,{
        method : "post",
        headers:{
            "Content-Type":"application/json",
        },
        body : JSON.stringify(formData)
    })

    const data = await response.json();
    console.log(data);
    if(!response.ok){
        console.log("Error occured", data.message);
        return;
    }

    localStorage.setItem("token", data.token);
    console.log("LOgin succesfull");
    navigate("/home");
}catch(error){
    console.error("Something went wrong : ", error.message);
}
    
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
                    Login
                </h2>
                <form className="flex flex-col gap-4">
                    <input style={inputStyle} onChange={handleChange}type="email" name="email" value={formData.email} placeholder='email'></input>
                    <input style={inputStyle} onChange={handleChange}type="password" name="password" value={formData.password} placeholder='password'></input>
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
                </form>
            </div>
        </div>
        </>
    )
}

export default LogIN;