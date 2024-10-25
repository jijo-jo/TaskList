import React,{useState} from "react";
import './SignIn.css'

const SignIn = ()=>{

 const [userName,setUserName] = useState("");
 const [password,setPassWord] = useState("");

 const [userNameError,setUserNameError] = useState(false);
 const [passwordError, setPasswordError]  = useState(false)

 const handleChange = (e,fieldText)=>{

    if(fieldText==="username"){
      setUserName(e.target.value)

    }
    else if(fieldText === "password"){
        setPassWord(e.target.value)
    }


 }

 const handleSubmit = ()=>{
   //api call for sign in
 }

  return(
    <>
    <div>
        <form onSubmit={handleSubmit} className="">
            <h1 className="form-heading">Sign In</h1>
            <div className="form-fields">
                <label>UserName</label>
                <input name="username" type="text" value={userName} onChange={(e)=>{handleChange(e,"username")}}/>
            </div>
            <div className="form-fields">
                <label>PassWord</label>
                <input name="password" type="password" value={password} onChange={(e)=>{handleChange(e,"password")}}/>
            </div>
            <button type="submit" className="form-button">
              LogIn
            </button>
        </form>
    </div>
    </>
  )
}

export default SignIn