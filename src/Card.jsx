import './Card.css'

export default function Card({title, text, imageUrl, selected, onSelect}) {

    return (
        // If the card is selected, add the 'selected' class to apply the border highlight
        <div className={`card text-bg-dark ${selected === imageUrl ? 'selected' : ''}`} onClick={() => onSelect(imageUrl)}>
            <img src={imageUrl} className="card-img" alt={title} />
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                </div>
        </div>
    )
}