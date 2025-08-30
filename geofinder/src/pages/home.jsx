

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
            </div>

            <div id="history"></div>
        </div>
        </>
    );
}

export default Home;