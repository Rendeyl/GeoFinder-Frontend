function HistoryTab({ ip, onRecover, onDelete }){
    return(
        <>
        <div id="history-tab-box">
            <div id="htMain">
                <h2 id="htIp">{ip}</h2>
            </div>
            <button id="recover" onClick={onRecover}>♻️</button>
            <button id="delete" onClick={onDelete}>🗑️</button>
        </div>
        </>
    );
}

export default HistoryTab;