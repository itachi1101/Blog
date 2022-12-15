import HorizontalCard from '../../Components/Horizontal cards/HorizontalCards'
import MainCard from '../../Components/MainCard/MainCard'
import './HomePage.styles.scss'
import horizontalData from '../../horizontalCardData'
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
                    {
                        horizontalData.map((data) => {
                            return (
                                <HorizontalCard key={data.id} title={data.title} date={data.date} url={data.url} />
                            )

                        })
                    }
                </div>
            </div>
        </div>
    )
}