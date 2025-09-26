import Image from 'next/image';

// --- Project Data ---
const projects = [
  {
    title: "Session-Based Recommendation Engine",
    subtitle: "An End-to-End MLOps Pipeline for E-Commerce",
    description: "Architected and deployed a complete MLOps pipeline to serve real-time product recommendations, featuring a custom Word2Vec model trained on a 42-million-row dataset.",
    liveUrl: "https://reco.ishan-visionary.tech",
    githubUrl: "https://github.com/IshanLenin/project-echo",
    tech: ["Python", "FastAPI", "Docker", "Nginx", "PostgreSQL", "CI/CD"]
  },
  {
    title: "Scalable News Analysis Engine",
    subtitle: "An Asynchronous AI-Powered Data Pipeline",
    description: "Designed a distributed system to scrape and analyze news articles, using Celery and Redis for asynchronous processing and a multi-database architecture.",
    githubUrl: "https://github.com/IshanLenin/Social-Media-A", // Please update if this is incorrect
    tech: ["Python", "FastAPI", "Celery", "Redis", "Docker Compose", "Vector DB"]
  },
  {
    title: "AI-Powered Interactive Storyteller",
    subtitle: "A Real-Time Generative AI Application",
    description: "Built a real-time, interactive storytelling game by chaining multiple AI models (Gemini for text, Stable Diffusion for images) via a FastAPI WebSocket backend.",
    liveUrl: "https://elysium.ishan-visionary.tech",
    githubUrl: "https://github.com/IshanLenin/Project-Elysium", // Please create and update this repo
    tech: ["Python", "FastAPI", "WebSockets", "Docker", "Generative AI"]
  },
  {
    title: "Campus Room Finder",
    subtitle: "A Full-Stack University Utility",
    description: "Engineered a full-stack application to solve a real-world problem by parsing a 96-page university timetable PDF to find and display available classrooms in real-time.",
    liveUrl: "https://freeroam.ishan-visionary.tech",
    githubUrl: "https://github.com/IshanLenin/Project-FreeRoam",
    tech: ["Python", "FastAPI", "Docker", "pdfplumber", "SQLite"]
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold">
            Ishan M Lenin
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
            Second-Year Engineering Student Building Scalable, AI-Powered Systems.
          </p>
          <div className="flex justify-center space-x-6 pt-4">
            <a href="https://github.com/IshanLenin" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/ishan-lenin/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="mailto:ishanlenin2006@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">My Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{project.subtitle}</p>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-gray-700 text-xs font-semibold px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-4 mt-auto pt-4">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                      Live Demo
                    </a>
                  )}
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-8 bg-gray-900 bg-opacity-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I am a second-year Information Science and Technology student at Presidency University, driven by a passion for building robust, real-world applications. My journey is fueled by discipline, both in the gym where I train 6 days a week, and at the keyboard where I tackle complex engineering challenges. I thrive on the "grind" of turning a difficult idea into a deployed, functional product. My goal is to become a world-class engineer and eventually build my own products that make a real impact.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Ishan M Lenin. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </main>
  );
}

