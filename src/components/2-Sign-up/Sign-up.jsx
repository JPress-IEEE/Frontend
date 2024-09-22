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
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!name) {
      newErrors.name = "Name is required";
    }

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    if (!role) {
      newErrors.role = "User type is required"; // تصحيح اسم المفتاح هنا
    }

    return newErrors;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log("Sign-Up Data:", { name, email, password, role });
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      
      const response = await fetch("http://localhost:5175/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, role }),
      });
      console.log("Response:", response);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong");
      }

      const data = await response.json();
      console.log("Response Data:", data);
        setIsLoggedIn(true); // تأكد من استدعاء هذه الوظيفة
        navigate("/");
      
    } catch (error) {
      console.error(error);
      alert(error.message || "An error occurred during sign-up.");
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
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="error-text">{errors.name}</p>}

            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}

            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="error-text">{errors.password}</p>}

            <label htmlFor="userType">User Type</label>
            <select
              id="userType"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select User Type</option>
              <option value="client">Client</option>
              <option value="applicant">Applicant</option>
              <option value="admin">Admin</option>
            </select>
            {errors.role && <p className="error-text">{errors.role}</p>} {/* تصحيح اسم المفتاح هنا */}

            <div style={{ display: "flex", gap: "20px", margin: "10px 0" }}>
              <input style={{ width: "20px" }} type="checkbox" id="terms" />
              <label htmlFor="terms">I agree to the terms & conditions</label>
            </div>

            <button onClick={handleSignUp}>Sign up</button>

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
