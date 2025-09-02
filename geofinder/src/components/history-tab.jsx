function HistoryTab({ ip }){
    return(
        <>
        <div id="history-tab-box">
            <div id="htMain">
                <h2 id="htIp">{ip}</h2>
            </div>
            <button id="recover">♻️</button>
            <button id="delete">🗑️</button>
        </div>
        </>
    );
}

export default HistoryTab;