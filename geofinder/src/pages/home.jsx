import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HistoryTab from "../components/history-tab";

function Home(){
    const [info, setInfo] = useState(null);
    const [search, setSearch] = useState("");
    const [history, setHistory] = useState([]);

    useEffect(() =>{
        fetch("https://ipinfo.io/json")
        .then((res) => res.json())
        .then((data) => {
            setInfo(data);
        })  
        .catch((err) => console.error(err));

        fetchHistory();
    }, []);

    async function fetchHistory() {
    try {
      const res = await fetch("https://geofinder-api.vercel.app/api/history");
      if (!res.ok) throw new Error("Failed to fetch history");

      const data = await res.json();
      setHistory(data);
    } catch (err) {
      console.error("Fetch History Error:", err);
    }
  }

    async function addHistory(newInfo) {
        try{
            const res = await fetch("https://geofinder-api.vercel.app/api/history",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        ip: newInfo.ip,
                        city: newInfo.city,
                        region: newInfo.region,
                        country: newInfo.country,
                        location: newInfo.loc,
                        timezone: newInfo.timezone,
                        org: newInfo.org
                     })
                }
            )

            if(res.ok){
                console.log("History Added");
                fetchHistory();
            }else{
                alert("History Adding Error");
            }

        }catch (err){
            console.log(err);
        }
    }

    async function searchIP() {
        try{
            fetch(`https://ipinfo.io/${search}/geo`)
            .then((res) => res.json())
            .then((data) => {
            setInfo(data);
            addHistory(data);
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

    async function recoverIP(ip) {
        try {
            const res = await fetch(`https://ipinfo.io/${ip}/geo`);
            const data = await res.json();
            setInfo(data);
        }catch (err) {
            console.error("Recover IP Error:", err);
        }
    }

    async function deleteHistory(id) {
  try {
    const res = await fetch(`https://geofinder-api.vercel.app/api/history?id=${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      console.log("History deleted");
      fetchHistory();
    } else {
      console.error("Delete failed");
    }
  } catch (err) {
    console.error("Delete History Error:", err);
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
            <button className="upperBtn" onClick={clearIP}>Clear</button>
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
                        {history.map((item) => (
                            <HistoryTab key={item.id} ip={item.ip} onRecover={() => recoverIP(item.ip)}onDelete={() => deleteHistory(item.id)}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;