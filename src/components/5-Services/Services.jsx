import "./Services.css";
import servicesData from "./servicesData.json"; // Importing the JSON data

export default function Services() {
  return (
    <div className="container px-4 md:px-8 lg:px-10 my-20">
      <div className="square">
        <div className="corner red"></div>
        <div className="corner red"></div>
        <div className="corner red"></div>
        <div className="corner red"></div>
        <p className="text">Discover Our Wide Range of Services</p>
      </div>

      <div>
        {servicesData.map((container, containerIndex) => (
          <div className="services-container" key={containerIndex}>
            <div className="bar">
              <h2>{container.title}</h2>
              <p>{container.description}</p>
            </div>

            <div className="services-cards">
              {container.services.map((service, serviceIndex) => (
                <div className="service-card" key={serviceIndex}>
                  <img
                    className="service-icon"
                    src={service.imgSrc}
                    alt={service.title}
                  />
                  <div className="text_1">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <div className="text_2">
                    <p>{service.text_1_p}</p>
                    <p>{service.text_2_p}</p>
                    <p>{service.text_3_p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
