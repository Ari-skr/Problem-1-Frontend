import React, { useState } from "react";
import "./Bodyelem.css";


const Bodyelem = () => {
  const [formdata, setformdata] = useState({ secret_key: "" });
  const [str, setstr] = useState("");
  const [givep, setgivep] = useState(0);
  const change_handler = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const get_data = async (e) => {
    e.preventDefault();
    setgivep(1);
    
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata),
      };
      try {
        const response = await fetch(`http://localhost:5050/`, requestOptions);
        const data = await response.json();
        setstr(data.message);
      } catch (error) {
        alert(`Error: ${error.message}`);
      }

      const requestOptions2 = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata),
      };
      try {
        const response = await fetch("http://localhost:5050/", requestOptions2);
        const data = await response.json();
        console.log(data.message);
        if(!data){
          console.log(str);
        }
      } catch (error) {
        alert(`Error: ${error.message}`);
      }
  };
  

  return (
    <div className="bodyelem">
      <h1>Enter the secret key to get the flag:</h1>
      <input
        className="input-text"
        onChange={change_handler}
        type="text"
        id="secret_key"
        name="secret_key"
        required
      />
      <div></div>
      <button onClick={(e)=>get_data(e)}>Submit</button>
      {givep === 1 && (
        <p className="response">See the response in the console</p>
      )}
    </div>
  );
};

export default Bodyelem;
