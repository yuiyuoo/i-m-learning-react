export default function Quotes(props) {
    return (
        <div className="blockquote">
            <h1>
                {props.quote}
            </h1>
            <h4>{props.author}</h4>
        </div>

    )
}