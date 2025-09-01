import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleLogin() {
        try{
            const res = await fetch("https://geofinder-api.vercel.app/api/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ username, password})
                }
            )

            if(res.ok){
                navigate("/home");
            }

        }catch (err){
            console.log(err);
        }
    }


    return(
        <>
            <div id="box1">
            <div id="loginBox">
                <h1 id="geoFinder">GeoFinder</h1>
                <input type="email" className="userInput" placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input type="password" className="userInput" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button id="loginBtn">Log-in</button>
            </div>
            </div>
        </>
    );
}

export default Login;