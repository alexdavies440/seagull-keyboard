

export default function Key({ note, type, rate }) {

    let audio = new Audio("/seagull-squawk_zgKL1Dn0.m4a");

    function handleSubmit() {

        console.log(note);
        console.log(rate);
        audio.preservesPitch = false;
        audio.playbackRate = rate;
        // audio.loop = true;
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