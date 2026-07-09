import react from 'react';
import { useState, useEffect } from 'react';
function SignUp(){
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
        const response = await fetch("http://localhost:3000/signup",{
            method : "post",
            headers:{
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(formData),
        })
        const data = await response.json();
        console.log("server responded frontend", data);

    }
   
    return(
        <>
        <div>
            <form>
            <input onChange={handleChange}type="text" name="username" placeholder="username" value = {formData.username}>
            </input>
            <input onChange={handleChange} type="email" name="email" placeholder="email" value = {formData.email}>
            </input>
            <input onChange={handleChange} type="password" name="password" placeholder="password" value = {formData.password}>
            </input>
            </form>
            <button onClick = {onSubmit}> SUbMiT </button>
        </div>
        </>
    )
}

export default SignUp;