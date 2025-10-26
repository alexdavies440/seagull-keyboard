import Key from "./Key";

export default function Octave() {
    return (
        <div className="keyboard">
    
            <Key
                note="C"
                type="white-key"
            />
            <Key
                note="C#"
                type="black-key"
            />
            <Key
                note="D"
                type="white-key"
            />
            <Key
                note="Eb"
                type="black-key"
            />
            <Key
                note="E"
                type="white-key"
            />
            <Key
                note="F"
                type="white-key"
            />
            <Key
                note="F#"
                type="black-key"
            />
            <Key
                note="G"
                type="white-key"
            />
            <Key
                note="Ab"
                type="black-key"
            />
            <Key
                note="A"
                type="white-key"
            />
            <Key
                note="Bb"
                type="black-key"
            />
            <Key
                note="B"
                type="white-key"
            />
        </div>
    );
}