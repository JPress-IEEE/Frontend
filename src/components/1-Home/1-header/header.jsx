/* eslint-disable react/prop-types */
import "./header.css";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function Header({ isLoggedIn }) {
  const [active, setActive] = useState(false);
  const [showPage, setShowPage] = useState(false); // State to show or hide the popup
  const [showAll, setShowAll] = useState(false); // State to control "Show all" behavior
  const popupRef = useRef(null); // Reference for notification-popup

  // Array of messages (replace with your own data)
  const messages = [
    {
      id: 1,
      author: "John Wick",
      content: "Lorem ipsum dolor sit amet, consectetur.",
      time: "20 minutes ago",
    },
    {
      id: 2,
      author: "Jane Doe",
      content: "Curabitur non nulla sit amet.",
      time: "1 hour ago",
    },
    // Add more messages here
  ];

  // Show the first 4 messages or all messages depending on the `showAll` state
  const displayedMessages = showAll ? messages : messages.slice(0, 4);

  // Function to close the popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPage(false);
      }
    }

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupRef]);

  return (
    <header className="header">
      <div className="container px-4 navbar md:px-8 lg:px-10">
        <div className="logo">
          <img src="img/logo.png" alt="logo" />
        </div>

        <nav>
          <ul className={active ? "active" : ""}>
            <li>
              <Link to="/" onClick={() => setActive(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to={isLoggedIn ? "/Offers" : "/contact_us"}
                onClick={() => setActive(false)}
              >
                {isLoggedIn ? "Offers" : "Contact Us"}
              </Link>
            </li>
            <li>
              <Link to="/Services" onClick={() => setActive(false)}>
                Services
              </Link>
            </li>
          </ul>
        </nav>

        <div className="btn">
          {isLoggedIn ? (
            <div
              style={{ display: "flex", alignItems: "center", gap: "30px" }}
              className="user-info"
            >
              <div className="icon">
                <i className="fa-regular fa-bell"></i>
                <i
                  className="fa-regular fa-envelope"
                  onClick={() => setShowPage(!showPage)}
                ></i>
              </div>
              <Link to="/Profile">
                <img
                  src="img/Review-1.jpeg"
                  alt="User"
                  className="user-image"
                />
              </Link>
            </div>
          ) : (
            <div id="bbt" className={active ? "active" : ""}>
              <Link
                onClick={() => setActive(false)}
                to="/sign-up"
                className="login-btn"
              >
                Sign up
              </Link>
              <Link
                onClick={() => setActive(false)}
                to="/Taske"
                className="Taske-btn"
              >
                Become a Tasker
              </Link>
            </div>
          )}
        </div>

        <div className="menus">
          <i
            onClick={() => setActive(!active)}
            className="fa-solid fa-bars"
          ></i>
        </div>
      </div>

      {/* Popup content below the header aligned to the right */}
      {showPage && (
        <div ref={popupRef} className="notification-popup">
          <div className="arrow-up"></div>

          <div className="messages-container">
            <div className="header">
              <h1 className="title">Messages</h1>
              <div>
                <i className="fa-solid fa-check-double"></i>
                <a onClick={() => setShowAll(false)} className="mark-all-read">
                  Mark all as read
                </a>
              </div>
            </div>

            <div className="messages-list">
              {displayedMessages.map((message) => (
                <div key={message.id} className="message">
                  <div className="message-content">
                    <img
                      src="https://openui.fly.dev/openui/24x24.svg?text=👤"
                      alt="User Avatar"
                      className="avatar"
                    />
                    <div className="message-details">
                      <p className="message-text">
                        <span className="message-author">{message.author}</span>{" "}
                        {message.content}
                      </p>
                      <span className="message-time">{message.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="footer">
              {!showAll ? (
                <a
                  href="#"
                  className="show-all"
                  onClick={() => setShowAll(true)}
                >
                  <i className="fa-solid fa-chevron-right"></i> Show all
                </a>
              ) : (
                <a
                  href="#"
                  className="show-all"
                  onClick={() => setShowAll(false)}
                >
                  <i className="fa-solid fa-chevron-left"></i> Show less
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
