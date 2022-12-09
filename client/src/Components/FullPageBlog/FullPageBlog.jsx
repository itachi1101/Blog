import './FullPageBlog.styles.scss'
import image from '../../Photo/background.jpg'
import { AiTwotoneDelete } from "react-icons/ai";
import { FaStickyNote, FaThumbsUp } from "react-icons/fa";
import ProfileImage from '../../Photo/profileImage.jpg'
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function FullPageBlog() {
    const [like, setLike] = useState(false)
    const handleLike = () => {
        setLike(!like)
    }
    return (
        <>
        <Link to="/" style={{padding:"10px",color:"blue"}}>Go back</Link>
            <div className="fullPage-blog-container">
                <div className="wrapper">
                    <div className="publish-date">
                        Published on Dec 07, 2022
                    </div>
                    <div className="heading">Milian Places That Highlight The City</div>
                    <div className="tags">
                        <span>Vacation</span>
                        <span>Holidays</span>
                        <span>Sight Seeing</span>
                    </div>
                    <div className="blog-image">
                        <img src={image} />
                    </div>
                    <div className="author-details">
                        <div className="about">
                            <div className="author-image">
                                <img src={ProfileImage} />
                            </div>
                            <div className="author-name">
                                <span style={{ color: "black" }}>Author:</span> Aviral Budhani
                            </div>
                        </div>
                        <div className="like-btn" onClick={handleLike}>
                            <FaThumbsUp style={{ color: `${like ? "coral" : "gray"}` }} />
                        </div>

                    </div>
                    <div className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia inventore blanditiis eos saepe laboriosam, autem quis enim veritatis sunt harum natus voluptas tempora! Rerum odio id repellendus cum eligendi dolores!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nulla tempore blanditiis cupiditate. Laborum mollitia ut quidem consequatur. Aut dignissimos dicta et nihil, fugiat illum soluta. Perferendis esse praesentium officiis.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aspernatur, commodi voluptatibus voluptate possimus quae qui quo iste deserunt sit totam facilis facere accusantium porro voluptatum numquam impedit sed blanditiis?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aspernatur, commodi voluptatibus voluptate possimus quae qui quo iste deserunt sit totam facilis facere accusantium porro voluptatum numquam impedit sed blanditiis?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aspernatur, commodi voluptatibus voluptate possimus quae qui quo iste deserunt sit totam facilis facere accusantium porro voluptatum numquam impedit sed blanditiis?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aspernatur, commodi voluptatibus voluptate possimus quae qui quo iste deserunt sit totam facilis facere accusantium porro voluptatum numquam impedit sed blanditiis?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aspernatur, commodi voluptatibus voluptate possimus quae qui quo iste deserunt sit totam facilis facere accusantium porro voluptatum numquam impedit sed blanditiis?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aspernatur, commodi voluptatibus voluptate possimus quae qui quo iste deserunt sit totam facilis facere accusantium porro voluptatum numquam impedit sed blanditiis?
                    </div>
                    <div className="btn-container">
                        <span className="btn-update"><FaStickyNote />UPDATE</span>
                        <span className="btn-delete"><AiTwotoneDelete />DELETE</span>
                    </div>
                </div>

            </div>
        </>
    )
}