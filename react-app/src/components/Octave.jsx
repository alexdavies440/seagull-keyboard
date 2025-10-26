import Key from "./Key";

export default function Octave() {
    return (
        <div>
            <div className="white-keys">
                <Key
                    note="C"
                    type="white-key"
                />
                <Key
                    note="D"
                    type="white-key"
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
                    note="G"
                    type="white-key"
                />
                <Key
                    note="A"
                    type="white-key"
                />
                <Key
                    note="B"
                    type="white-key"
                />
            </div>
            <div className="black-keys">
                <Key
                    note="C#"
                    type="black-key"
                />
                <Key
                    note="Eb"
                    type="black-key"
                />
                <div className="space"></div>
                <Key
                    note="F#"
                    type="black-key"
                />
                <Key
                    note="Ab"
                    type="black-key"
                />
                <Key
                    note="Bb"
                    type="black-key"
                />
            </div>

        </div>
    );
}