import { useState } from "react";

function Register() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  async function RegisterUser(event){
    event.preventDefault();
   const response = await fetch(`http://localhost:4000/api/register`,{
    method: 'POST',
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    })
    const Data = await response.json();
    console.log(Data)
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={RegisterUser}>
        <input
          value={name}
          onChange={(e) => setname(e.target.value)}
          type="text"
          placeholder="name"
        /> <br />
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
        <input type="submit" value="Resister" />
      </form>
    </div>
  );
}

export default Register;
