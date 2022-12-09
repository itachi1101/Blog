import { Link } from 'react-router-dom'
import Logo from '../../Photo/logo.png'


import './Header.styles.scss'


export default function HeaderNew() {
    const navLinks = ["posts", "write", "about", "contact"]
    return (
        <div className="header-container">
            <div className="wrapper">
                <Link to="/">

                    <div className="logo">
                        <img src={Logo} />
                    </div>
                </Link>
                <div className="links-container">

                    <Link to="/posts" className="link-style">POSTS</Link>
                    <Link to="/write" className="link-style">WRITE</Link>
                    <Link to="/about" className="link-style">ABOUT</Link>
                    <Link to="/contact" className="link-style">CONTACT</Link>
                </div>
                <div className="login-container">
                    <Link to="/login" className="link-style">LOGIN</Link>
                </div>
            </div>
        </div>
    )
}