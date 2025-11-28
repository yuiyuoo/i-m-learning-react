
export default function Contact(props) {
    return (
        <article className="contact-card">
            <img src={props.img} alt="Photo of Mr. Do" />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="https://cdn-icons-png.flaticon.com/512/455/455705.png" alt="phone-icon" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src="https://cdn-icons-png.flaticon.com/512/386/386220.png" alt="mail-icon" />
                <p>{props.mail}</p>
            </div>
        </article>
    )
}