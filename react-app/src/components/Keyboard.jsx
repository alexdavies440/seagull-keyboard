import Octave from "./Octave";

export default function Keyboard() {
    return (
        <div className="keyboard">
            <Octave octave={0.1} />
            <Octave octave={1.2} />
            <Octave octave={2.4} />
            <Octave octave={3.6} />
            <Octave octave={4.8} />
        </div>
    );
}