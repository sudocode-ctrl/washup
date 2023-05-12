
import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from '../../images/logo.png'
import {
    signOut,
} from "firebase/auth";
import { auth } from "../../firebase-config";
const Navbar = () => {
    const location = useLocation;
    let navigate = useNavigate();
    useEffect(() => {
        if (location.pathname !== "/home") {
            localStorage.removeItem("token");
            localStorage.removeItem("name");

        }
    }, [location])

    const handleLogout = async () => {
        localStorage.removeItem("washupUser");
        await signOut(auth);
        navigate("/login");
        alert("Logged out Successfully")

    }


    return (
        <div >
            <div className="container">
                <div className="wrapper">
                    <div className="left">
                        <ul className="title-list">
                            <li className="listItem">
                                <div className="logo-icon">
                                    <img src={logo} className="logo-icon" alt="title_icon" />
                                </div>
                            </li>
                            <li className="listItem">
                                <Link to="/" className="title">
                                    WashUp
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <div className="">
                        <ul className="list">
                            <li className="listItem">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="listItem">
                                <Link to="/about">About</Link>
                            </li>


                        </ul>
                    </div>


                    <div className="logout">
                        {(!localStorage.getItem("token")) && location.pathname !== '/home' ?
                            (<form className="" role="search">

                                <Link className="btn  mx-2" to="/" role="button">Login</Link>

                            </form>) : <> {localStorage.getItem("washupUser") ? localStorage.getItem("washupUser") : ""} <button onClick={handleLogout} className='btn '>Logout</button> <span className="usericon"><img className="usericon" src={""} alt="user icon" /></span> <span>  {localStorage.getItem("name")}</span></>
                        }
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Navbar