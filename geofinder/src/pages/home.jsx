function Home(){
    return(
        <>
        <div id="upper">
            <h1 id="geoFinder2">GeoFinder</h1>
            <input type="text" placeholder="Search IP" id="searchBar"/>
            <button className="upperBtn">Search</button>
            <button className="upperBtn">Clear</button>
        </div>
        </>
    );
}

export default Home;