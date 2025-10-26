
export default function Key({ note, type }) {

    return (
        <div>
            <button className={`key ${type}`}>
                {note}
            </button>   
        </div>
    );
}