import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Log_in.css";

export default function Log_in() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  console.log(password)

  const handleLogin = async (e) => {
    e.preventDefault();
    // Clear previous error
    setError("");
    const clientId = "your_client_id"; // استبدل بذلك المعرف الفعلي
    navigate("/post_service", { state: { clientId } });
  
    try {
      const response = await fetch('http://localhost:5175/api/auth/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // استخدم email بدلاً من username
      });

      const data = await response.json();
      console.log("Response Data:", data);
  
      if (!response.ok) {
        const errorMessage = data.message || "Login failed.";
        setError(errorMessage);
        console.error("Error:", errorMessage);
        return;
      }
  
      // إذا كانت الاستجابة ناجحة
      // alert("Login successful!");
      navigate("/"); // Redirect to a dashboard or home page
  
    } catch (err) {
      setError("An error occurred. Please try again later.");
      console.error("Login error:", err);
    }
  };
  
  
  return (
    <>
    
      <div className="container px-4 my-20 Log_in md:px-8 lg:px-10">
        <div className="cols">
          <div className="flex-1 col_img">
            <img src="img/Log-In.png" alt="Log In" />
          </div>

          <div className="flex-1 col_form">
            <div className="form">
              <h1>Log in</h1>
              <p>Log in to access your account</p>

              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {error && <p className="error-text">{error}</p>}

              <a className="Forget_Password" href="">
                Forget Password?
              </a>

              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  textAlign: "center",
                  margin: "10px 0",
                }}
              >
                <input style={{ width: "20px" }} type="checkbox" id="terms" />
                <label htmlFor="terms">Remember Me</label>
              </div>

              <button onClick={handleLogin}>Log In</button>

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
                Don't have an account?{" "}
                <span>
                  <Link to="/sign-up">Sign Up</Link>
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
