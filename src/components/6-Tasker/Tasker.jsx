import { useState } from "react";
import { Link } from "react-router-dom";
import "./Tasker.css";

export default function Taske() {
  const [userId, setUserId] = useState(""); // يمكن أن تأتي من النظام الخاص بالمصادقة
  const [location, setLocation] = useState("");
  const [summary, setSummary] = useState("");
  const [jobName, setJobName] = useState("");
  const [resume, setResume] = useState(null); // تعامل مع السيرة الذاتية كملف

  const handleSignUp = (e) => {
    e.preventDefault();

    // تحقق من صحة البيانات إن لزم الأمر

    // استخدم FormData للتعامل مع الملفات والحقول
    const formData = new FormData();
    formData.append("userId", userId);
    formData.append("location", location || ""); // إرسال القيمة فارغة إذا لم يملأ المستخدم الحقل
    formData.append("summary", summary || ""); // إرسال القيمة فارغة إذا لم يملأ المستخدم الحقل
    formData.append("jobName", jobName || ""); // إرسال القيمة فارغة إذا لم يملأ المستخدم الحقل

    if (resume) {
      formData.append("resume", resume); // رفع الملف كـ binary
    } else {
      formData.append("resume", ""); // إرسال القيمة فارغة إذا لم يرفع المستخدم الملف
    }

    fetch("http://localhost:5175/api/applicant", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          alert("Sign up successful!");
          // إعادة توجيه أو أي عملية بعد النجاح
        } else {
          alert("Sign up failed. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      });
  };

  return (
    <div className="container px-4 my-20 Tasker md:px-8 lg:px-10">
      <div className="cols">
        <div className="flex-1 col_img">
          <img src="img/Log-In.png" alt="" />
        </div>
        <div className="flex-1 col_form">
          <div className="form">
            <h1>sign up</h1>
            <p>
              Join JPRESS and start getting job opportunities tailored for your
              skills
            </p>

            <label>User Name</label>
            <input
              type="text"
              placeholder="User name"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />

            <label>Location</label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Select your location</option>
              <option value="Cairo">Cairo</option>
              <option value="Tanta">Tanta</option>
            </select>

            <label>Job Name</label>
            <input
              type="text"
              placeholder="Job Name"
              value={jobName}
              onChange={(e) => setJobName(e.target.value)}
            />

            <label>Resume</label>
            <input type="file" onChange={(e) => setResume(e.target.files[0])} />
            <label>Summary</label>
            <textarea
              placeholder="Provide a brief overview of your skills and experience"
              rows="4"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            ></textarea>

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
                <Link to="/sign-up">Sign up</Link>
              </span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
