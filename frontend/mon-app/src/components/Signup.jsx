import React,{useState} from 'react';


const Signup = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [firstname,setFirstname] = useState("");
    const [surname,setSurname] = useState("");
    const [BirthdayDate,setBirthdayDate] = useState("");

   
   const addEmail= (event) =>{
        setEmail(event.target.value) 
    }
   const addPassword= (event) =>{
        setPassword(event.target.value) 
    }
   const addConfirmPassword= (event) =>{
        setConfirmPassword(event.target.value) 
    }
   const addFirstname= (event) =>{
        setFirstname(event.target.value) 
    }
   const addSurname= (event) =>{
        setSurname(event.target.value) 
    }
   const addBirthdayDate= (event) =>{
        setBirthdayDate(event.target.value) 
    }

    return (
        <div className="container d-flex flex-column">
            <h1>SIGN UP</h1>
            <input type="text" placeholder="email" onChange={addEmail} />
            <input type="text" placeholder="Password" onChange={addPassword}/>
            <input type="text" placeholder="confirm password "onChange={addConfirmPassword}/>
            <input type="text" placeholder="firstname" onChange={addFirstname}/>
            <input type="text" placeholder="surname" onChange={addSurname}/>
            <input type="text" placeholder="date of birth" onChange={addBirthdayDate}/>

            <button>Sign Up</button>


        </div>
    )
}

export default Signup;










