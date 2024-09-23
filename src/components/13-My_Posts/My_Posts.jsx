import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./My_Posts.css";
import cardsData from "./cardsData.json"; // استدعاء بيانات JSON

export default function My_Posts({ posts }) {
  const [visibleApplicants, setVisibleApplicants] = useState(null);

  const toggleApplicants = (index) => {
    if (visibleApplicants === index) {
      setVisibleApplicants(null);
    } else {
      setVisibleApplicants(index);
    }
  };

  return (
    <div className="container">
      <div className="user-profile-card">
        <div className="sidebar-container">
          {/* Sidebar links */}
          <div className="hierarchical-container">
            <div className="content-wrapper">
              <Link to="/Profile">
                <p className="blue-heading section-title-style">My profile</p>
              </Link>
              <Link to="/My_Posts">
                <p className="blue-heading section-title-style">My Posts</p>
              </Link>
              <Link to="/Notifications">
                <p className="blue-heading section-title-style">
                  Notifications
                </p>
              </Link>              <p className="blue-heading section-title-style">Security</p>
              <p className="blue-heading section-title-style">Language</p>
            </div>
            <div className="language-selector-container">
              <p className="blue-text-snippet">English</p>
              <p className="blue-text-snippet">Arabic</p>
            </div>
          </div>
          <p className="blue-heading section-title-style">Delete Account</p>
        </div>

        {/* Posts section */}
        <div className="post-details">
          {posts.length === 0 ? (
            <p>No posts yet</p>
          ) : (
            <div className="posts-container">
              {posts.map((post, index) => (
                <div key={index} className="post-card">
                  <div className="My_post">
                    <div className="p-4 m-4 rounded-lg shadoww-md bg-card">
                      <div className="nav">
                        <p className="text-sm text-muted">Posted 1 hour ago</p>
                        <a
                          href="#"
                          onClick={() => toggleApplicants(index)}
                          className="text-accent hover:text-accent-foreground"
                        >
                          {visibleApplicants === index
                            ? "Hide Applicants"
                            : "See The Applicants"}
                        </a>
                      </div>
                      <div className="bost">
                        <h2 className="text-lg font-bold text-primary">
                          {post.serviceName}
                        </h2>
                        <p className="text-muted-foreground">
                          {post.serviceDescription}
                        </p>
                        <div className="location">
                          <p className="text-sm text-muted">
                            Category type :{" "}
                            <span className="text-secondary">
                              Graphic design
                            </span>
                          </p>
                          <p className="text-sm text-muted">
                            <span className="inline-flex items-center icon">
                              <i className="mr-3 fa-solid fa-location-dot"></i>{" "}
                              {post.location}
                            </span>
                          </p>
                        </div>
                      </div>

                      {/* Display applicants when visible */}
                      {visibleApplicants === index && (
                        <div className="p-4 m-4 rounded-lg applicants-card bg-light">
                          <div className="bar">
                            <h3 className="font-bold text-md text-secondary">
                              The Service Providers who set the price{" "}
                            </h3>
                            <Link to="/Service_Provider">
                            <a href="#">See all</a>

                            </Link>
                          </div>

                          {/* Cards for applicants */}
                          <div className="cols_card">
                            {cardsData.map((card) => (
                              <div key={card.id} className="col_card">
                                <div className="p-6 rounded-lg shadow-md bg-card boxx">
                                  <img
                                    className="w-24 h-24 mx-auto rounded-full"
                                    src={card.image}
                                    alt={`Profile of ${card.name}`}
                                  />
                                  <h2 className="mt-4 text-lg font-semibold text-center text-primary">
                                    {card.name}
                                  </h2>
                                  <p className="text-center text-muted-foreground">
                                    {card.title}
                                  </p>
                                  <div className="flex justify-center mt-2">
                                    {[...Array(4)].map((star, i) => (
                                      <span
                                        key={i}
                                        className={
                                          i < card.rating
                                            ? "star filled"
                                            : "star empty"
                                        }
                                      >
                                        ⭐
                                      </span>
                                    ))}
                                  </div>
                                  <p className="mt-2 text-center text-muted-foreground">
                                    {card.description}
                                  </p>
                                  <button className="w-full p-2 mt-4 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80">
                                    View profile
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
