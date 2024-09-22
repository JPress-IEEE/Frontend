import "./works.css";

export default function Works() {
  return (
    <div className="work-container container px-4 md:px-8 lg:px-10">
      <div className="bar">
        <h3>How it works </h3>
        <p>
          Discover how easy it is to find and hire top-rated service providers{" "}
          <br /> through our streamlined, AI-driven platform
        </p>
      </div>
      <div className="colls">
        <div className="col">
          <div className="icon">
            <img src="img/works-3.svg" alt="" />
            <p className="nampr">01</p>
          </div>
          <div className="text">
            <h3>Post Your Service Request</h3>
            <p>Describe your needs in a few clicks.</p>
          </div>
        </div>
        <div className="col">
          <div className="icon">
            <img src="img/works-2.svg" alt="" />
            <p className="nampr">02</p>
          </div>
          <div className="text">
            <h3>Post Your Service Request</h3>
            <p>Describe your needs in a few clicks.</p>
          </div>
        </div>
        <div className="col">
          <div className="icon">
            <img src="img/works-1.svg" alt="" />
            <p className="nampr">03</p>
          </div>
          <div className="text">
            <h3>Post Your Service Request</h3>
            <p>Describe your needs in a few clicks.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
