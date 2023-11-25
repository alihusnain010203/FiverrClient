import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [options, setOptions] = useState(false);
  const [showLinks, setShowLinks] = useState(window.innerWidth > 800);
  const {pathname}=useLocation();
  const CurrenUser = {
    id: 1,
    username: "johndoe",
    isSeller: true,
  };

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  const handleResize = () => {
    setShowLinks(window.innerWidth > 800);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", isActive);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className={(active || pathname !== "/") ? "navbar active" : "navbar"}>
      <div className="container">
        <Link to="/" className="link"><div className="logo">
          <span className="text">fiverr</span>
          <span className="dot">.</span>
        </div></Link>
        

        <div className="hamburger" onClick={toggleLinks}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Links for devices with width greater than 800px */}
        {showLinks && (
          <div className={`links ${showLinks ? "show-links " : ""}`}>
            <span>Fiverr Business</span>
            <span>Explore</span>
            <span>English</span>
            {!CurrenUser &&<Link to="/login"><span>Sign in</span></Link> }
            {!CurrenUser.isSeller && <span>Become a Seller</span>}
            {CurrenUser && (
              <div className="user" onClick={() => setOptions(!options)}>
                <img
                  src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  width="32"
                  height="32"
                  alt=""
                />
                <span>{CurrenUser.username}</span>
                {options && (
                  <div className="options">
                    {CurrenUser.isSeller && (
                      <>
                        <Link to={"/mygigs"} className="link" >Gigs</Link>
                        <Link to={"/add"} className="link" >Add New Gig</Link>
                      </>
                    )}
                    <Link to={"/orders"} className="link">My Orders</Link>
                    <Link to={"/messages"}  className="link">Messages</Link>
                    <Link to={"/"} className="link" >Log Out</Link>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
};

export default Navbar;
