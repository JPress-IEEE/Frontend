import { useState } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";

export default function Profile() {
  // حالات لإدارة المدخلات
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingContact, setIsEditingContact] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);

  const [name, setName] = useState("John Wick");
  const [email, setEmail] = useState("Johnwick@gmail.com");
  const [phone, setPhone] = useState("0115132543");
  const [country, setCountry] = useState("Egypt");
  const [city, setCity] = useState("Cairo");
  const [jobTitle, setJobTitle] = useState("Product Designer");
  const [image, setImage] = useState("img/Review-8.jpeg"); // الصورة

  // لتغيير الصورة
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container">
      <div className="user-profile-card">
        <div className="sidebar-container">
          <div className="hierarchical-container">
            <div className="hierarchical-container"></div>
            <div className="content-wrapper">
              <p className="blue-heading section-title-style blue-heading:first-child">
                My profile{" "}
              </p>

              <Link to="/My_Posts">
                <p className="blue-heading section-title-style blue-heading:first-child">
                  My Posts
                </p>
              </Link>
              <Link to="/Notifications">
                <p className="blue-heading section-title-style">
                  Notifications
                </p>
              </Link>

              <p className="blue-heading section-title-style">Security</p>
              <p className="blue-heading section-title-style">Language</p>
            </div>
            <div className="language-selector-container">
              <p className="blue-text-snippet">English</p>
              <p className="blue-text-snippet">Arabic</p>
            </div>
          </div>
          <p className=" blue-heading section-title-style">Delete Account</p>
        </div>
        {/* ///////////////////////// */}
        <div className="profile-card3">
          <div className="profile-card1">
            <div className="profile-card2">
              <label htmlFor="imageUpload">
                <img
                  className="profile-image-circle"
                  src={image}
                  alt="Profile"
                  style={{ cursor: "pointer" }}
                />
              </label>
              <input
                id="imageUpload"
                type="file"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />

              <div className="profile-card">
                {isEditingName ? (
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                ) : (
                  <p className="blue-heading-style">{name}</p>
                )}
                <div className="profile-info">
                  {isEditingName ? (
                    <input
                      type="text"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                    />
                  ) : (
                    <p className="elegant-text">{jobTitle}</p>
                  )}
                  <p className="elegant-text1">
                    {city}, {country}
                  </p>
                </div>
              </div>
            </div>
            <button
              className="edit"
              onClick={() => setIsEditingName(!isEditingName)}
            >
              <i className="fa-solid fa-pen"></i>

              {isEditingName ? "Save" : "Edit"}
            </button>
          </div>

          <div className="personal-info-card">
            <div className="personal-info-container">
              <p className="blue-heading-style">Personal information</p>
              <div className="personal-info-container1">
                <div className="contact-info-container">
                  <p className="elegant-text">Email Address</p>
                  {isEditingContact ? (
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  ) : (
                    <p className="unique-text-block">{email}</p>
                  )}

                  <p className="phone-label">Phone</p>
                  {isEditingContact ? (
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  ) : (
                    <p className="orange-text-heading">{phone}</p>
                  )}
                </div>
              </div>
            </div>
            <button
              className="edit"
              onClick={() => setIsEditingContact(!isEditingContact)}
            >
              <i className="fa-solid fa-pen"></i>

              {isEditingContact ? "Save" : "Edit"}
            </button>
          </div>

          <div className="personal-info-card">
            <div className="personal-info-container">
              <p className="blue-heading-style">Address</p>
              <div className="personal-info-container1">
                <div className="contact-info-container">
                  <p className="elegant-text">Country</p>
                  {isEditingAddress ? (
                    <input
                      type="text"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  ) : (
                    <p className="unique-text-block">{country}</p>
                  )}

                  <p className="contact-info-label">City/State</p>
                  {isEditingAddress ? (
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  ) : (
                    <p className="orange-text-heading">{city}</p>
                  )}
                </div>
              </div>
            </div>
            <button
              className="edit"
              onClick={() => setIsEditingAddress(!isEditingAddress)}
            >
              <i className="fa-solid fa-pen"></i>
              {isEditingAddress ? "Save" : "Edit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
