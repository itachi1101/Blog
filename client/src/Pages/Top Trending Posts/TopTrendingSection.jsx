
import InvertedCard from '../../Components/InvertedCard/InvertedCard'
import './TopTrendingSection.styles.scss'
export default function TopTrendingSection() {
    return (
        <div className="top-trending-section-container">
            <h1 className="top-trending-section-container-heading">
                Top Trending
            </h1>
            <div className="top-trending-section-container-wrapper">
                <InvertedCard/>
                <InvertedCard/>
                <InvertedCard/>
                <InvertedCard/>
            </div>
            <div className='horizontal-line'></div>
        </div>
    )
}