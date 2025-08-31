function Login(){
    return(
        <>
            <div id="box1">
            <div id="loginBox">
                <h1 id="geoFinder">GeoFinder</h1>
                <input type="email" className="userInput" placeholder="Email"/>
                <input type="password" className="userInput" placeholder="Password"/>
                <button id="loginBtn">Log-in</button>
            </div>
            </div>
        </>
    );
}

export default Login;