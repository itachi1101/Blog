import PostCard from '../../Components/Post cards/PostCard'
import './LatestBlogsSection.styles.scss'
export default function LatestBlogsSection() {
    return (
        <div className="latest-blogs-section-container">
            <div className="latest-blogs-heading">
                Latest Blogs
            </div>
            <div className="latest-blogs-wrapper">
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />

            </div>
        </div>
    )
}