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
                    rate={(octave * 9)/8 }
                />
                <Key
                    note="E"
                    type="white-key"
                    rate={(octave * 5)/4 }
                />
                <Key
                    note="F"
                    type="white-key"
                    rate={(octave * 4)/3}
                />
                <Key
                    note="G"
                    type="white-key"
                    rate={(octave * 3)/2}
                />
                <Key
                    note="A"
                    type="white-key"
                    rate={(octave * 5)/3 }
                />
                <Key
                    note="B"
                    type="white-key"
                    rate={(octave * 15)/8 }
                />
            </div>
            <div className="black-keys">
                <Key
                    note="C#"
                    type="black-key"
                    rate={(octave * 10)/9 }
                />
                <Key
                    note="Eb"
                    type="black-key"
                    rate={(octave * 6)/5 }
                />
                <div className="space"></div>
                <Key
                    note="F#"
                    type="black-key"
                    rate={(octave * 45)/32}
                />
                <Key
                    note="Ab"
                    type="black-key"
                    rate={(octave * 8)/5}
                />
                <Key
                    note="Bb"
                    type="black-key"
                    rate={(octave * 9)/5}
                />
            </div>

        </div>
    );
}