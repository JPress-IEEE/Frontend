import { useNavigate } from "react-router-dom";
import "./Post_service.css";
import { useState, useEffect } from "react";

export default function Post_service({ addNewPost }) {
  const [serviceName, setServiceName] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [location, setLocation] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const [errors, setErrors] = useState({
    serviceName: "",
    serviceDescription: "",
    location: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (serviceName && serviceDescription && location) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [serviceName, serviceDescription, location]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};
    if (!serviceName) formErrors.serviceName = "Please enter the service name.";
    if (!serviceDescription)
      formErrors.serviceDescription = "Please enter the service description.";
    if (!location) formErrors.location = "Please select a location.";

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    addNewPost({
      serviceName,
      serviceDescription,
      location,
    });

    setServiceName("");
    setServiceDescription("");
    setLocation("");
    setErrors({});

    // Navigate to the recommendation page
    navigate("/recommendation");
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
                Service name
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
                Service description
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
              <input type="checkbox" id="terms" className="checkbox-input" />
              <label htmlFor="terms" className="checkbox-label">
                The service does not contain any external communication means
                and is compatible with the terms of use
              </label>
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
