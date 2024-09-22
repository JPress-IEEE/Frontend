import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home container px-4 md:px-8 lg:px-10">
      <div className="right">
        <div className="col_text">
          <h1>
            Find the Right Professional for Your Needs <span>with JPress</span>.
          </h1>
          <p>
            Post your service requests and let our AI recommend the best
            professionals.
          </p>
          <div className="btn">
            <Link to="/Post_service">
              <button className="orange">Post A Service</button>
            </Link>
            <button>Browse Professionals</button>
          </div>
        </div>
        <div className="col_img">
          <img src="img/home.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
