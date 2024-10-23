import React, { useState } from 'react'


function Login() {
  const [username, setUsername] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const userDetails= {
    username: "Sage Waweru",
    email:"sagewaweru2005@gmail.com",
    password: "Sage359",
  };


  const handleLogin = (e) => {
    e.preventDefault();

    
    if (username === userDetails.username  && email === userDetails.email && password === userDetails.password) {
      setErrorMessage("");  
      alert("Login successful!");
    } 
    else if(username != userDetails.username){
      setErrorMessage("Incorrect username ");
    }
    else if(password != userDetails.password){
      setErrorMessage("Incorrect password");
    }
    else {
      setErrorMessage("Incorrect email");
    }
  };
  return (
    <div>
       <form onSubmit={handleLogin}  style={{border:"2px solid black",margin:"2rem", textAlign:"left", padding:"1rem", backgroundColor:" #6469bf", color:"bisque", fontSize:"1.5rem"}}>
        <label htmlFor="">Username:</label> <br />
        <input style={{width:"30vw", height:"2rem", borderRadius:".5rem"}} type="text"  value={username} onChange={(e) => setUsername(e.target.value)}required/> <br />
        <label htmlFor="">Email:</label> <br />
        <input style={{width:"30vw", height:"2rem", borderRadius:".5rem"}} type="email" value={email} onChange={(e) => setemail(e.target.value)}required/> <br />
        <label htmlFor="">Password:</label> <br />
        <input style={{width:"30vw", height:"2rem", borderRadius:".5rem"}} type="password"value={password} onChange={(e) => setPassword(e.target.value)}required /> <br />
        <div style={{display:'flex', alignItems:"center", justifyContent:"center"}}>
          <button style={{margin:"1rem", width:"20vw"}} type="submit">Login</button>
          </div>
       </form>
       {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  )
}

export default Login