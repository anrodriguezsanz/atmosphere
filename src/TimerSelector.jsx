export default function TimerSelector({selected, onSelect}) {
    return (
        <div className="timer-selector d-flex justify-content-center my-4">
            <div className="btn-group w-auto">
                <button type="button" className={`btn btn-outline-secondary ${selected === 15 ? 'active' : ''}`} onClick={() => onSelect(15)}>15 min</button>
                <button type="button" className={`btn btn-outline-secondary ${selected === 25 ? 'active' : ''}`} onClick={() => onSelect(25)}>25 min</button>
                <button type="button" className={`btn btn-outline-secondary ${selected === 45 ? 'active' : ''}`} onClick={() => onSelect(45)}>45 min</button>
            </div>
        </div>
    )
}