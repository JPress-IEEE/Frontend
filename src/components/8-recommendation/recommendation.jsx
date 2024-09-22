import { useState, useEffect } from "react";
import "./recommendation.css";
import profilesData from "./profiles.json"; // Import the JSON data
import { Link } from "react-router-dom";

export default function Recommendation() {
  const [profiles, setProfiles] = useState([]);

  // Load the profile data from JSON on component mount
  useEffect(() => {
    setProfiles(profilesData);
  }, []);

  return (
    <div className="container px-4 my-20 md:px-8 lg:px-10">
      <div className="square">
        <div className="corner red"></div>
        <div className="corner red"></div>
        <div className="corner red"></div>
        <div className="corner red"></div>
        <p className="text">
          You can see some of our AI recommendations for you
        </p>
      </div>
      <section className="Recommendation">
        <div className="profile-cards-container ">
          {profiles.map((profile, index) => (
            <div className="profile-card" key={index}>
              <img
                className="profile-image"
                src={profile.image}
                alt={profile.name}
              />
              <h2 className="profile-name">{profile.name}</h2>
              <p className="profile-title">{profile.title}</p>
              <div className="profile-rating">
                {Array(4)
                  .fill()
                  .map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < profile.rating ? "star filled" : "star empty"
                      }
                    >
                      ⭐
                    </span>
                  ))}
              </div>
              <p className="profile-description">{profile.description}</p>
              <Link to="/TaskerProfile" className="view-profile-button">
                View profile
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
