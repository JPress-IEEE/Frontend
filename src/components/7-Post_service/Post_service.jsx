import { useNavigate } from "react-router-dom";
import "./Post_service.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Post_service({ addNewPost }) {
  const [serviceName, setServiceName] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [location, setLocation] = useState(""); // تم إصلاح المتغير هنا
  const [isFormValid, setIsFormValid] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [errors, setErrors] = useState({
    serviceName: "",
    serviceDescription: "",
    location: "",
    terms: "",
  });

  const navigate = useNavigate();
  const clientId = location.state?.clientId;

  useEffect(() => {
    if (serviceName && serviceDescription && location && termsAccepted) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [serviceName, serviceDescription, location, termsAccepted]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formErrors = {};
    if (!serviceName) formErrors.serviceName = "Please enter the service name.";
    if (!serviceDescription) formErrors.serviceDescription = "Please enter the service description.";
    if (!location) formErrors.location = "Please select a location.";
    if (!termsAccepted) formErrors.terms = "You must accept the terms.";

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      await fetch("http://localhost:5175/api/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientId, // Use the actual clientId
          jobName: serviceName,
          location,
          description: serviceDescription,
        }),
      });

      addNewPost({
        serviceName,
        serviceDescription,
        location,
      });

      setServiceName("");
      setServiceDescription("");
      setLocation("");
      setTermsAccepted(false);
      setErrors({});

      // Navigate to the recommendation page
      navigate("/recommendation");
    } catch (error) {
      console.error("Error posting service:", error);
      // Handle the error (show a message to the user, etc.)
    }
  };

  return (
    <div className="container px-4 my-20 md:px-8 lg:px-10">
      <div className="square">
        <div className="corner red"></div>
        <div className="corner red"></div>
        <div className="corner red"></div>
        <div className="corner red"></div>
        <p className="text">Post your service in just a few simple steps</p>
      </div>

      <div className="Post_service">
        <div className="widget-container">
          <form className="widget-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="service-name" className="form-label">
                Service Name
              </label>
              <input
                type="text"
                id="service-name"
                value={serviceName}
                onChange={(e) => {
                  setServiceName(e.target.value);
                  setErrors({ ...errors, serviceName: "" });
                }}
                placeholder="Enter a clear title that describes the service you want to provide"
                className={`form-input ${errors.serviceName ? "input-error" : ""}`}
              />
              {errors.serviceName && (
                <p className="error-message">{errors.serviceName}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="service-description" className="form-label">
                Service Description
              </label>
              <textarea
                id="service-description"
                rows="10"
                value={serviceDescription}
                onChange={(e) => {
                  setServiceDescription(e.target.value);
                  setErrors({ ...errors, serviceDescription: "" });
                }}
                placeholder="Enter the service description accurately and include all information and conditions"
                className={`form-input ${errors.serviceDescription ? "input-error" : ""}`}
              ></textarea>
              {errors.serviceDescription && (
                <p className="error-message">{errors.serviceDescription}</p>
              )}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="location">
                Location
              </label>
              <select
                id="location"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                  setErrors({ ...errors, location: "" });
                }}
                className={errors.location ? "input-error" : ""}
              >
                <option value="">Enter your service area or location</option>
                <option value="location1">Location 1</option>
                <option value="location2">Location 2</option>
              </select>
              {errors.location && (
                <p className="error-message">{errors.location}</p>
              )}
            </div>

            <div className="form-group">
              <input
                type="checkbox"
                id="terms"
                className="checkbox-input"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
              <label htmlFor="terms" className="checkbox-label">
                The service does not contain any external communication means and is compatible with the terms of use.
              </label>
              {errors.terms && <p className="error-message">{errors.terms}</p>}
            </div>

            <button type="submit" className="submit-button" disabled={!isFormValid}>
              Post To See AI Recommendation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
