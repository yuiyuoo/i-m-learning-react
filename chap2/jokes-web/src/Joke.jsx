import { useState } from "react"

export default function Joke(props) {
    const [isShown, setIsShown] = useState(false)
    function toggleShown() {
        setIsShown(prevShown => !prevShown)
    }
    function toggleHideShow() {
        return isShown ? "Hide" : "Show";
    }
    return (
        <>
            {props.setup && <p className="setup">{props.setup}</p>}
            {isShown && <p>{props.punchline}</p>}
            {/* {!isShown && <button onClick={toggleShown}>Show punchline</button>}
            {isShown && <button onClick={toggleShown}>Hide punchline</button>} */}
            <button onClick={toggleShown}>{toggleHideShow()} punchline</button>
            <hr />
        </>
    )
}