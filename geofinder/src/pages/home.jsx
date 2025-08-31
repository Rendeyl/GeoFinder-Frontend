import { useEffect, useState } from "react";

function Home(){
    const [info, setInfo] = useState(null);

    useEffect(() =>{
        fetch("https://ipinfo.io/json")
        .then((res) => res.json())
        .then((data) => {
            setInfo(data);
        })
        .catch((err) => console.error(err));
    }, []);

    return(
        <>
        <div id="upper">
            <h1 id="geoFinder2">GeoFinder</h1>
            <input type="text" placeholder="Search IP" id="searchBar"/>
            <button className="upperBtn">Search</button>
            <button className="upperBtn">Clear</button>
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
                    <h1 className="infoText">Org: {info?.org} </h1>
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