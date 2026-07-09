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


    return(
        <>
        <div>
            <form>
                <input onChange={handleChange}type="email" name="email" value={formData.email} placeholder='email'></input>
                <input onChange={handleChange}type="password" name="password" value={formData.password} placeholder='password'></input>
                <button onClick = {onSubmit}> Submit</button>
            </form>
        </div>
        </>
    )
}

export default LogIN;