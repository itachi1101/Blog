import "./AdPage.styles.scss"
import adImage from '../../Photo/adImg1.jpeg'
export default function AdPage() {
    return (
        <div className="Adcontainer">
            <div className="subheading">Ads</div>
            <div className="wrapper">
                <img src={adImage} />
            </div>
        </div>
    )
}