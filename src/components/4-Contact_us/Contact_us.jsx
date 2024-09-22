import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Contact_us.css";

export default function Contact_us() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Full Phone Number: ", phoneNumber);
  };

  return (
    <>
      <div className="Contact_us container px-4 md:px-8 lg:px-10">
        <div className="cols">
          <div className="col_img flex-1">
            <img src="img/Contact_us.png" alt="" />
          </div>
          {/* ////////////////// */}
          <div className="col_form flex-1">
            <div className="form">
              <div className="bar">
                <h1>Get in touch</h1>
                <p>Our friendly team would love to hear from you.</p>
              </div>

              <div className="First_Last">
                <div>
                  <label htmlFor="">First name</label>
                  <input type="text" placeholder="First name" />
                </div>
                <div>
                  <label htmlFor="">Last name</label>
                  <input type="text" placeholder="Last name" />
                </div>
              </div>

              <label htmlFor="">Email</label>
              <input type="email" placeholder="you@company.com" />

              <label htmlFor="phone">Phone Number</label>
              <PhoneInput
                className="PhoneInput"
                country={"eg"} // Default country is Egypt
                value={phoneNumber}
                onChange={setPhoneNumber}
                enableSearch={true} // Enable search for country
                inputStyle={{ width: "100%", padding: "0 50px" }} // Style to make the input fit
              />

              <label className="" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your message..."
                rows="5"
                required
              ></textarea>

              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  textAlign: "center",
                  margin: "10px 0",
                }}
              >
                <input style={{ width: "20px" }} type="checkbox" id="terms" />
                <label
                  style={{ fontSize: "15px", color: "rgb(138, 138, 138)" }}
                  className="checkbox"
                  htmlFor="terms"
                >
                  You agree to our friendly privacy policy.
                </label>
              </div>

              <button onClick={handleSubmit}>Send message</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
