

function Home(){

    const current_ip = "1.2.34.52";

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
                    <h1 className="infoText">IP:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{current_ip}</h1>
                </div>
                <div id="info-box2">
                    <h1 className="infoText">City: </h1>
                    <h1 className="infoText">Region: </h1>
                    <h1 className="infoText">Country: </h1>
                    <h1 className="infoText">Location: </h1>
                    <h1 className="infoText">Timezone: </h1>
                </div>
                <div id="info-box3">
                    <h1 className="infoText">Org: </h1>
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