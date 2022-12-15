import './HorizontalCard.styles.scss'
import image from '../../Photo/h1.jpg'
export default function HorizontalCard(props) {
    return (
        <div className="horizontal-card-container">
            <div className="image-container">
                <img src={props.url} />
            </div>
            <div className="wrapper">
                <div className="date">{props.date}</div>
                <h1 className="heading">{props.title}</h1>
            </div>
        </div>
    )
}