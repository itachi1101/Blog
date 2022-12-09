import Card from '../../Components/Card/Card'
import './LatestBlogsSection.styles.scss'
export default function LatestBlogsSection() {
    return (
        <div className="latest-blogs-section-container">
            <div className="latest-blogs-heading">
                Latest Blogs
            </div>
            <div className="latest-blogs-wrapper">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />

            </div>
        </div>
    )
}