import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Tasker.css";

export default function Tasker({ setIsLoggedIn }) {
  const [userId, setUserId] = useState("");
  const [name, setName] = useState(""); // New state for name
  const [location, setLocation] = useState("");
  const [summary, setSummary] = useState("");
  const [jobName, setJobName] = useState("");
  const [resume, setResume] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Applicant");
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required"; // Validate name
    if (!location) newErrors.location = "Location is required";
    if (!jobName) newErrors.jobName = "Job Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    try {
      const signUpResponse = await fetch("http://localhost:5175/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, role:"applicant" }), // Ensure role is correct
      });

      if (!signUpResponse.ok) {
        const errorData = await signUpResponse.json();
        console.error("Signup error details:", errorData);
        throw new Error(errorData.message || "Signup failed");
      }

      const signUpData = await signUpResponse.json();
      const accessToken = signUpData.accessToken;

      const formData = new FormData();
      formData.append("userId", signUpData.userId); // Use userId from sign-up response
      formData.append("location", location);
      formData.append("summary", summary);
      formData.append("jobName", jobName);
      if (resume) {
        formData.append("resume", resume);
      } else {
        console.warn("No resume file selected");
      }

      const applicantResponse = await fetch("http://localhost:5175/api/applicant", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData, // No Content-Type header
      });
      

      if (!applicantResponse.ok) {
        const applicantErrorText = await applicantResponse.text(); // Get the raw response text
        console.error("Applicant creation error details:", applicantErrorText);
        throw new Error(applicantErrorText || "Failed to create applicant");
      }
      
      const applicantData = await applicantResponse.json();
      localStorage.setItem("applicantId", applicantData._id);
      // alert("Sign up successful!");
      // setIsLoggedIn(true);
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      alert(error.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container px-4 my-20 Tasker md:px-8 lg:px-10">
      <div className="cols">
        <div className="flex-1 col_img">
          <img src="img/Log-In.png" alt="Sign Up" />
        </div>
        <div className="flex-1 col_form">
          <div className="form">
            <h1>Sign Up</h1>
            <p>Join JPRESS and start getting job opportunities tailored for your skills</p>

            <label>Name</label> {/* Added label for name */}
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrors({ ...errors, name: "" });
              }}
            />
            {errors.name && <p className="error-text">{errors.name}</p>} {/* Display error for name */}
            {errors.userId && <p className="error-text">{errors.userId}</p>}

            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors({ ...errors, email: "" });
              }}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}

            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors({ ...errors, password: "" });
              }}
            />
            {errors.password && <p className="error-text">{errors.password}</p>}

            <label>Location</label>
            <select
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
                setErrors({ ...errors, location: "" });
              }}
            >
              <option value="">Select your location</option>
              <option value="Cairo">Cairo</option>
              <option value="Tanta">Tanta</option>
            </select>
            {errors.location && <p className="error-text">{errors.location}</p>}

            <label>Job Name</label>
            <input
              type="text"
              placeholder="Job Name"
              value={jobName}
              onChange={(e) => {
                setJobName(e.target.value);
                setErrors({ ...errors, jobName: "" });
              }}
            />
            {errors.jobName && <p className="error-text">{errors.jobName}</p>}

            <label>Resume</label>
            <input type="file" onChange={(e) => setResume(e.target.files[0])} />

            <label>Summary</label>
            <textarea
              placeholder="Provide a brief overview of your skills and experience"
              rows="4"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            ></textarea>

            <button onClick={handleSignUp} disabled={loading}>
              {loading ? "Signing up..." : "Sign up"}
            </button>

            <div className="horizontal-separator-with-text">
              <div className="hierarchical-content-divider"></div>
              <p className="primary-text-heading">OR</p>
              <div className="hierarchical-content-divider"></div>
            </div>

            <div className="icon">
              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-google"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>

            <h4>
              Already Have An Account?{" "}
              <span>
                <Link to="/log_in">Log In</Link>
              </span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}