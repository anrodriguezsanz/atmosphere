export default function TimerDisplay({minutes, seconds}) {

    return (
        <div className="timer-display my-5 text-center">
            <h1 className="fw-bold" style={{ fontSize: '4rem', letterSpacing: '-2px' }}>
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </h1>
        </div>
    );
}