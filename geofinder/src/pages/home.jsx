import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home(){
    const [info, setInfo] = useState(null);
    const [search, setSearch] = useState("");

    useEffect(() =>{
        fetch("https://ipinfo.io/json")
        .then((res) => res.json())
        .then((data) => {
            setInfo(data);
        })
        .catch((err) => console.error(err));
    }, []);

    async function searchIP() {
        try{
            fetch(`https://ipinfo.io/${search}/geo`)
            .then((res) => res.json())
            .then((data) => {
            setInfo(data);
        })
        }catch (err){
            console.log(err);
        }
    }

    async function clearIP() {
        try{
            fetch(`https://ipinfo.io/json`)
            .then((res) => res.json())
            .then((data) => {
            setInfo(data);
            setSearch("");
        })
        }catch (err){
            console.log(err);
        }
    }

    async function call() {
        try{
            const res = await fetch("https://geofinder-api.vercel.app/api/login",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                }
            );

            const data = await res.json();

            if(res.ok){
                console.log(data.message);
            }else{
                alert("error");
            }

        }catch (err){
            console.log(err);
            alert("error");
        }
    }

    return(
        <>
        <div id="upper">
            <Link to={"/"}>
            <h1 id="geoFinder2">GeoFinder</h1>
            </Link>
            <input type="text" placeholder="Search IP" id="searchBar" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <button className="upperBtn" onClick={searchIP}>Search</button>
            <button className="upperBtn" onClick={call}>Clear</button>
        </div>

        <div id="lower">
            <div id="info">
                <div id="info-box1">
                    <h1 className="infoText">IP:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{info?.ip}</h1>
                </div>
                <div id="info-box2">
                    <h1 className="infoText">City: &nbsp; {info?.city}</h1>
                    <h1 className="infoText">Region: &nbsp; {info?.region} </h1>
                    <h1 className="infoText">Country: &nbsp; {info?.country}</h1>
                    <h1 className="infoText">Location: &nbsp; {info?.loc}</h1>
                    <h1 className="infoText">Timezone: &nbsp; {info?.timezone}</h1>
                </div>
                <div id="info-box3">
                    <h1 className="infoText">Org: &nbsp; {info?.org} </h1>
                </div>
            </div>

            <div id="history">
                <div id="history-box1">
                    <h1 className="infoText">History</h1>
                    <div id="history-box2">

                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;