import PostCard from "../../Components/Post cards/PostCard";
import './Page2.styles.scss'
export default function Page2(){
    return(
        <div className="page2-container">
            <div className="page2-heading">
                Editor's Choice
            </div>
            <div className="page2-wrapper">
                <PostCard/>
                <PostCard/>
                <PostCard/>
                
            </div>
        </div>
    )
}