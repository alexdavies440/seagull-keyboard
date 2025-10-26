import Octave from "./Octave";

export default function Keyboard() {
    return (
        <div className="keyboard">
            <Octave octave={0.1} />
            <Octave octave={0.2} />
            <Octave octave={0.4} />
            <Octave octave={0.8} />
            <Octave octave={1.6} />
        </div>
    );
}