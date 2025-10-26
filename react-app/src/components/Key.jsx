

export default function Key({ note, type, rate }) {

    const audioCtx = new AudioContext();

    let audio = new Audio("./public/seagull-sound-effect-272695.mp3");

    function handleSubmit() {
        event.preventDefault();
        console.log(note);
        console.log(rate);
        audio.preservesPitch = false;
        audio.playbackRate = rate;
        audio.play();
    }

    return (
        <div>
            <button className={`key ${type}`} onClick={handleSubmit}>
                {note}
            </button>   
        </div>
    );
}