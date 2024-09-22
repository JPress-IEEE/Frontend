// import React from "react";
import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/1-Home/1-header/header";
import Home from "./components/1-Home/2-home/Home";
import Discover from "./components/1-Home/3-Discover/Discover";
import Popular from "./components/1-Home/4-Popular/Popular";
import Works from "./components/1-Home/5-works/works";
import WhyJPress from "./components/1-Home/6-Why-JPress/Why-JPress";
import Review from "./components/1-Home/7-Review/Review";
import FAQItem from "./components/1-Home/8-Questions/Questions";
import Footer from "./components/1-Home/9-Footer/Footer";
import Sign from "./components/2-Sign-up/Sign-up";
import Log_in from "./components/3-Log_in/Log_in";
import Contact_us from "./components/4-Contact_us/Contact_us";
import Services from "./components/5-Services/Services";
import Tasker from "./components/6-Tasker/Tasker";
import Post_service from "./components/7-Post_service/Post_service";
import Recommendation from "./components/8-recommendation/recommendation";
import TaskerProfile from "./components/10-taskerProfile/TaskerProfile";
import PaymentPage from "./components/9-payment/Payment";
import Offers from "./components/12-Offers/Offers";
import Profile from "./components/11-Profile/Profile";
import My_Posts from "./components/13-My_Posts/My_Posts";
import Service_Provider from "./components/14-Service_Provider/Service_Provider";
  
function HomeLayout() {
  return (
    <>
      <Home />
      <Discover />
      <Popular />
      <Works />
      <WhyJPress />
      <Review />
      <FAQItem />
    
        </>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);

  // دالة لإضافة منشور جديد إلى المصفوفة
  const addNewPost = (newPost) => {
    setPosts([...posts, newPost]);
  }
  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} />

      <Routes>
        {/* Main page with Home components */}
        <Route path="/" element={<HomeLayout />} />

        {/* Separate page for Sign-up */}
        <Route
          path="/sign-up"
          element={<Sign setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/log_in" element={<Log_in />} />
        <Route path="/contact_us" element={<Contact_us />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Taske" element={<Tasker />} />
        <Route path="/post_service" element={<Post_service addNewPost={addNewPost} />} />
        <Route path="/recommendation" element={<Recommendation />} />
        <Route path="/TaskerProfile" element={<TaskerProfile />} />
        <Route path="/Payment" element={<PaymentPage />} />
        <Route path="/Offers" element={<Offers />} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/My_Posts" element={<My_Posts posts={posts} />} />
        <Route path="/Service_Provider" element={<Service_Provider/>} />




         

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
