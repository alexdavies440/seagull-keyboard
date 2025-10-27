import Octave from "./Octave";

export default function Keyboard() {
    let baseRate = 0.1;
    return (
        <div className="keyboard">
            <Octave octave={baseRate} />
            <Octave octave={baseRate * 2} />
            <Octave octave={baseRate * 4} />
            <Octave octave={baseRate * 8} />
            <Octave octave={baseRate * 16} />
        </div>
    );
}