import Key from "./Key";

export default function Octave({ octave }) {
    return (
        <div>
            <div className="white-keys">
                <Key
                    note="C"
                    type="white-key"
                    rate={octave}
                />
                <Key
                    note="D"
                    type="white-key"
                    rate={octave + 0.2}
                />
                <Key
                    note="E"
                    type="white-key"
                    rate={octave + 0.4}
                />
                <Key
                    note="F"
                    type="white-key"
                    rate={octave + 0.5}
                />
                <Key
                    note="G"
                    type="white-key"
                    rate={octave + 0.7}
                />
                <Key
                    note="A"
                    type="white-key"
                    rate={octave + 0.9}
                />
                <Key
                    note="B"
                    type="white-key"
                    rate={octave + 1.1}
                />
            </div>
            <div className="black-keys">
                <Key
                    note="C#"
                    type="black-key"
                    rate={octave + 0.1}
                />
                <Key
                    note="Eb"
                    type="black-key"
                    rate={octave + 0.3}
                />
                <div className="space"></div>
                <Key
                    note="F#"
                    type="black-key"
                    rate={octave + 0.6}
                />
                <Key
                    note="Ab"
                    type="black-key"
                    rate={octave + 0.8}
                />
                <Key
                    note="Bb"
                    type="black-key"
                    rate={octave + 0.10}
                />
            </div>

        </div>
    );
}