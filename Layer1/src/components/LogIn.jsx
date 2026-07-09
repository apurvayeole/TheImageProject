import react from 'react';
import { useState } from 'react';
function LogIN(){
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
        const response = await fetch("http://localhost:3000/login" ,{
        method : "post",
        headers:{
            "Content-Type":"application/json",
        },
        body : JSON.stringify(formData)
    })
    console.log(response.json());
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