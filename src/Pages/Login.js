import { useState } from "react";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  async function LoginUser(event){
    event.preventDefault();
   const response = await fetch(`http://localhost:4000/api/login`,{
    method: 'POST',
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    const Data = await response.json();
    if(Data.user){
      alert("Login Successfully")
      window.location.href = '/quote'
    }else{
      alert("Please check the email and password")
    }
    console.log(Data)
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={LoginUser}>
        <input
          value={email}
          onChange={(e) => setemail(e.target.value)}
          type="email"
          placeholder="email"
        /> <br />
        <input
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          type="password"
          placeholder="password"
        /><br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
