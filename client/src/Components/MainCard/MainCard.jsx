import image from '../../Photo/main-card-image.jpg'
import './MainCard.styles.scss'
export default function MainCard() {
    return (
        <div className="maincard-container">
            <div className="image-container">
                <img src={image} />
            </div>
            <div className="date">07 Dec,2022</div>
            <div className="heading">See This Post to check sample </div>
            <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt atque rerum ad! Perspiciatis labore consequatur eveniet asperiores vitae tenetur assumenda eligendi tempora dolorum earum. Consectetur atque recusandae dolorem fuga doloremque?Lorem ipsum dolor sit amet consectetur adipisicing elit. At sed commodi error nostrum totam minima alias mollitia quod ipsum neque facilis ducimus illum eaque et dicta iure, doloremque beatae sequi?</div>
        </div>
    )
}