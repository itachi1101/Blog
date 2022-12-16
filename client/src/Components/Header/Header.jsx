import { useEffect } from 'react'
import { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Context } from '../../context/Context'
import Logo from '../../Photo/logo.png'

import './Header.styles.scss'


export default function HeaderNew() {
    const [currentUser, setCurrentUser] = useState(null)
    const { user, dispatch } = useContext(Context)
    const history = useHistory()
    useEffect(() => {
        if (user) {
            setCurrentUser(user.username)
        }
    }, [user])
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
        localStorage.removeItem("User")
        history.push("/")
    }
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
                {
                    currentUser &&
                    <div className="photo-name-container">
                        <span>{currentUser}</span>
                        <Link to="/profile">
                            <div className="img-container">
                                <img src={user.imagePath} />
                            </div>
                        </Link>
                    </div>
                }
                {
                    !currentUser ? (
                        <div className="login-container">

                            <Link to="/login" className="link-style">
                                LOGIN
                            </Link>
                        </div>
                    ) : ""
                }
            </div>
        </div>
    )
}