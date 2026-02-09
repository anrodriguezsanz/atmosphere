import TimerDisplay from "./TimerDisplay"

export default function FocusView({ secondsLeft, onStop }) {

    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;

    return (
        <div className="focus-mode d-flex flex-column align-items-center justify-content-center vh-100">
            <TimerDisplay
                minutes={minutes}
                seconds={seconds}>
            </TimerDisplay>

            <button
                type="button"
                className="stop-btn btn btn-light btn-sm shadow-lg fw-bold text-uppercase px-4 py-3 mt-5"
                style={{letterspacing: '2px'}}
                onClick={onStop}>
                Cancel Session
            </button>
        </div>
    )
}   