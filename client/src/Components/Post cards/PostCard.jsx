import { Link } from "react-router-dom";
import "./PostCard.styles.scss";
import image from '../../Photo/sample2.jpg'
export default function PostCard() {
    return (
        <div className="post">
            <img
                className="postImg"
                src={image}
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <Link className="link" to="/posts?cat=Music">
                        <span className="postCat">
                            Music
                        </span>
                    </Link>
                    <Link className="link" to="/posts?cat=Music">
                        <span className="postCat">
                            Life
                        </span>
                    </Link>
                </div>
                <span className="postTitle">
                    <Link to="/post/abc" className="link">
                        Lorem ipsum dolor sit amet
                    </Link>
                </span>
                <div className="hr"></div>
                <span className="postDate">7 Dec, 2022</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                atque, exercitationem quibusdam, reiciendis odio laboriosam?
            </p>
        </div>
    );
}