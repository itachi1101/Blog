import HorizontalCard from '../../Components/Horizontal cards/HorizontalCards'
import MainCard from '../../Components/MainCard/MainCard'
import './HomePage.styles.scss'
export default function HomePageNew() {
    return (
        <div className="homepage-container">
            <div className="homepage-wrapper">
                <div className='horizontal-line'></div>
                <div className="title">
                    THE BLOG
                </div>
                <div className='horizontal-line'></div>
            </div>
            <div className="home-card-container-main">
                <MainCard />
                <div className="small-card">
                    <HorizontalCard />
                    <HorizontalCard />
                    <HorizontalCard />
                </div>
            </div>
        </div>
    )
}