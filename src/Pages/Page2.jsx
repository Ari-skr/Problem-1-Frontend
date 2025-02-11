import React, { useState } from 'react';
import "../components/Page2.css";


const Page2 = () => {
  const [formdata, setformdata] = useState({
    username: "",
    password: ""
  });
  const [givep,setgivep] = useState(0)
  const change_handler = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const login = async (e) => {
    e.preventDefault(); 
    setgivep(1) 
    try {
      const response = await fetch(`http://35.154.199.2:5673/hype354789636`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formdata),
      });
      console.log(response)
      const data = await response.json();
      alert(data.message);
      console.log(data.message)

    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className='main_part'>
      <div className='form-container'>
        <h2>Login</h2>
        <form onSubmit={login}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input onChange={change_handler} type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input onChange={change_handler} type="password" id="password" name="password" required />
          </div>
          <button type="submit">Login</button>
          {givep===1?<p className='response'> See the response in the console </p>:<></>}
        </form>
      </div>
    </div>
  );
};

export default Page2;
