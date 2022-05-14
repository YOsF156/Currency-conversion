export default function inputAmount(props) {

    return (
        <div className="inputs">
            <div className="input-row">
                <label htmlFor={props.id}>{props.lbl} </label>
                <input type="number" name={props.id} id={props.id} value={props.value} placeholder={props.pH} onChange={props.convert} />
            </div>
        </div>
    )
}