

export default function Key({ note, type, rate }) {

    let audio = new Audio("./public/seagull-squawk.m4a");

    function handleSubmit() {
        
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