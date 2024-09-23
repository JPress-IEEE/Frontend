/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sign-up.css";

export default function Sign({ setIsLoggedIn }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("client");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email address is invalid";
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6) newErrors.password = "Password must be at least 6 characters long";
    if (!role) newErrors.role = "User type is required";
    return newErrors;
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        setLoading(false); // Stop loading
        return;
    }

    try {
        const response = await fetch("http://localhost:5176/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password, role }),
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Something went wrong");
        }
        const data = await response.json();
        console.log("Sign-up Data:", data);
        const { accessToken, refreshToken, userId } = data; // Destructure directly
        const clientResponse = await fetch("http://localhost:5176/api/client", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({ userId }),
        });

        if (!clientResponse.ok) {
            const clientErrorData = await clientResponse.json();
            throw new Error(clientErrorData.message || "Failed to create client");
        }

        const clientData = await clientResponse.json();
        console.log("Client Data:", clientData);
        const clientId = clientData._id;

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("clientId", clientId);

        setIsLoggedIn(true);
        navigate("/");
    } catch (error) {
        console.error(error);
        alert(error.message || "An error occurred during sign-up.");
    } finally {
        setLoading(false); 
    }
};
  return (
    <div className="container px-4 my-20 sign-up md:px-8 lg:px-10">
      <div className="cols">
        <div className="flex-1 col_img">
          <img src="img/sign-up.png" alt="Sign Up" />
        </div>
        <div className="flex-1 col_form">
          <div className="form">
            <h1>Sign up</h1>
            <p>Create an account to get started</p>

            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrors({ ...errors, name: "" });
              }}
            />
            {errors.name && <p className="error-text">{errors.name}</p>}

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

            <div style={{ display: "flex", gap: "20px", margin: "10px 0" }}>
              <input style={{ width: "20px" }} type="checkbox" id="terms" />
              <label htmlFor="terms">I agree to the terms & conditions</label>
            </div>

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
