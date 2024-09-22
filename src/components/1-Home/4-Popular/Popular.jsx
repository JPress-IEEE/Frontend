import "./Popular.css";

const projects = [
  {
    id: 1,
    title: "Home Cleaning",
    description: "Projects starting at 50$",
    imgSrc: "img/Popular-1.png",
  },
  {
    id: 2,
    title: "Graphic design",
    description: "Projects starting at 50$",
    imgSrc: "img/Popular-2.png",
  },
  {
    id: 3,
    title: "Furniture Assembly",
    description: "Projects starting at 50$",
    imgSrc: "img/Popular-3.png",
  },
  {
    id: 4,
    title: "Web Developer",
    description: "Projects starting at 130$",
    imgSrc: "img/Popular-4.png",
  },
  {
    id: 5,
    title: "Painting",
    description: "Projects starting at 50$",
    imgSrc: "img/Popular-5.png",
  },
  {
    id: 6,
    title: "Accounting",
    description: "Projects starting at 50$",
    imgSrc: "img/Popular-6.png",
  },
  // Add more projects here if needed
];

export default function Popular() {
  return (
    <div className=" container px-4 md:px-8 lg:px-10">
      <div className="popular-container">
        <div className="bar">
          <h2>Popular Projects</h2>
        </div>
        <div className="popular">
          {projects.map((project) => (
            <div key={project.id} className="col">
              <img src={project.imgSrc} alt={project.title} />
              <div className="text">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
