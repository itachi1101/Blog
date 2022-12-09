import './InvertedCard.styles.scss'
import image from '../../Photo/profileImage.jpg'
import user from '../../Photo/background.jpg'

import { FaArrowRight, FaThumbsUp } from "react-icons/fa";
import { useState } from 'react';

export default function InvertedCard(props) {
    const [liked, setLiked] = useState(false)

    return (
        <div className='inverted-card-container'>
            <div className="wrapper">
                <div className="image-container">
                    <img src={user} />
                </div>
                <div className="type">Development</div>
                <div className="heading">7 Css tools that you can use</div>
                <div className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae tempore ut accusantium minus pariatur voluptatum, saepe sunt harum neque vero rerum, dignissimos iure voluptates facere cumque rem ipsam. Corporis, at.</div>
                <div className="about-author-container">
                    <div className="author-img">
                        <img src={image} />
                    </div>
                    <div className="author-name-date">
                        <div className="name">Tester</div>
                        <div className="date">Dec 06,2022</div>
                    </div>
                    <div className="links-container">

                        <div className="like"  onClick={()=>setLiked(!liked)}>
                            <FaThumbsUp style={{ color: `${liked ? "red" : "gray"}` }} />
                        </div>
                        <div className="read-more">
                            <FaArrowRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}