import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login( { setIsLoggedIn } ){
    const [email, setEmail] = useState("");
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
                    body: JSON.stringify({ email, password})
                }
            )

            const data = await res.json();

            if(res.ok){
                console.log(data.message);
                setIsLoggedIn(true);
                localStorage.setItem("token", data.token);
                navigate("/home");
            }else{
                alert("Invalid Login");
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
                <input type="text" className="userInput" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" className="userInput" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button id="loginBtn" onClick={handleLogin}>Log-in</button>
            </div>
            </div>
        </>
    );
}

export default Login;