import './HorizontalCard.styles.scss'
import image from '../../Photo/h1.jpg'
export default function HorizontalCard() {
    return (
        <div className="horizontal-card-container">
            <div className="image-container">
                <img src={image} />
            </div>
            <div className="wrapper">
                <div className="date">07 Dec, 2022</div>
                <h1 className="heading">Learning the art of writing UI/UX</h1>
            </div>
        </div>
    )
}