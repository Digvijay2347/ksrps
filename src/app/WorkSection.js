const projects = [
    {
      image: "/img1.png",
      description: "This is the first project. It showcases our skills in web development.",
    },
    {
      image: "/img2.jpg",
      description: "The second project demonstrates our expertise in mobile app development.",
    },
    {
      image: "/img1.png",
      description: "The third project highlights our work in UI/UX design.",
    },
    {
      image: "/mb.jpg",
      description: "Project four represents our capabilities in e-commerce solutions.",
    },
    {
      image: "/spider.jpg",
      description: "Project five showcases our expertise in data visualization.",
    },
    {
      image: "/spd.jpg",
      description: "The sixth project demonstrates our skills in game development.",
    },
  ];
  
  <div id="work-section" className="relative flex-col sm:flex justify-center items-start min-h-screen bg-cover bg-black px-10 sm:px-20">
    <div className="max-w-6xl p-10">
      <h1 className="text-4xl sm:text-9xl font-Roboto font-bold mb-4 leading-none text-white break-words max-w-full word-break">My Work</h1>
      <p className="text-1xl sm:text-2xl text-white mt-4 font-mono font-light">
        Here are some of my projects and works. I specialize in creating visually appealing and highly functional designs.
        Deployed scalable travel, event, and telemedicine web and hybrid mobile apps using React SPA and PWA.
        Collaborated in 140+ projects with 50+ clients all around the world. I am also interested in data analytics and visualization.
      </p>
    </div>
    <div className="max-w-6xl flex flex-wrap justify-around mt-10">
      {/* Project Cards */}
      {projects.map((project, index) => (
        <div key={index} className="relative group overflow-hidden mb-8 w-64 h-64 sm:w-80 sm:h-80">
          <img src={project.image} alt={`Project ${index + 1}`} className="w-full h-full object-cover transition-transform transform group-hover:scale-110" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 transition-opacity opacity-0 group-hover:opacity-100">
            <h2 className="font-bold mb-2">Project {index + 1}</h2>
            <p className="text-sm">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  