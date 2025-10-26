import Key from "./Key";

export default function Octave() {
    return (
        <div className="keyboard">
            <Key note="C" />
            <Key note="C#" />
            <Key note="D" />
            <Key note="Eb" />
            <Key note="E" />
            <Key note="F" />
            <Key note="F#" />
            <Key note="G" />
            <Key note="Ab" />
            <Key note="A" />
            <Key note="Bb" />
            <Key note="B" />
        </div>
    );
}