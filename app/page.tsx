import Image from 'next/image';
import Link from 'next/link'; // Import Link for navigation if needed

// --- Data ---
const projects = [
  // --- NEW: AWS Project Added First ---
  {
    title: "Secure Multi-Tier Cloud Architecture on AWS",
    subtitle: "Professional Deployment of Visionary Image Analyzer",
    description: "Architected and deployed a secure, multi-tier cloud application on AWS from the ground up, implementing defense-in-depth security using a custom VPC, public/private subnets, Security Groups, NACLs, and a NAT Gateway.",
    liveUrl: "https://ishan-visionary.tech", // Ensure this points to the new AWS deployment
    githubUrl: "https://github.com/IshanLenin/Image-analyzer",
    tech: ["AWS (VPC, EC2, SG, NACL, IGW, NAT)", "Nginx", "Docker", "FastAPI", "Linux"],
    // Optional: Add path to your architecture diagram if you want to display it
    // diagramUrl: "/aws_architecture.png" 
  },
  // --- Existing Projects ---
  {
    title: "End-to-End Session-Based Recommendation Engine",
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
    githubUrl: "https://github.com/IshanLenin/Scalable-AI-Powered-News-Analysis-Engine",
    tech: ["Python", "FastAPI", "Celery", "Redis", "PostgreSQL", "Vector DB", "Docker Compose"]
  },
  {
    title: "AI-Powered Interactive Storyteller",
    subtitle: "A Real-Time Generative AI Application",
    description: "Built a real-time, interactive storytelling game by chaining multiple AI models (Gemini for text, Stable Diffusion for images) via a FastAPI WebSocket backend.",
    liveUrl: "https://elysium.ishan-visionary.tech",
    githubUrl: "https://github.com/IshanLenin/Project-Elysium",
    tech: ["Python", "FastAPI", "WebSockets", "Docker", "Generative AI"]
  }
  // Removed Campus Room Finder to keep the list focused
];

const skills = {
  "Languages": ["Python", "SQL", "JavaScript", "HTML/CSS"],
  "Libraries & Frameworks": ["FastAPI", "Pandas", "Gensim", "Pytest", "Celery", "React", "Next.js", "Tailwind CSS"], // Added frontend skills
  "Databases": ["PostgreSQL", "Vector DB", "Redis"],
  "Cloud & DevOps": ["AWS (VPC, EC2, SG, NACL, IGW, NAT)", "DigitalOcean", "Docker", "Nginx", "CI/CD (GitHub Actions)", "Linux", "Git", "Vercel"], // Combined & expanded
  "Problem Solving (DS\&A)": ["130+ problems solved (LeetCode)", "Neetcode 150 In Progress"] // Refined wording
};


// --- Main Component ---
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans scroll-smooth">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen p-8 text-center relative overflow-hidden">
        {/* Subtle background pattern or animation can go here */}
        <div className="absolute inset-0 bg-black opacity-30 z-0"></div> {/* Optional overlay */}
        
        <div className="relative z-10 space-y-6 max-w-4xl mx-auto"> {/* Increased max-width */}
           {/* Optional: Add a subtle animation */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
             Ishan M Lenin
          </h1>
          <p className="text-xl md:text-2xl text-gray-300"> {/* Slightly brighter text */}
            Second-Year Engineering Student | Building Scalable, AI-Powered Systems & Cloud Infrastructure.
          </p>
          <div className="flex justify-center space-x-6 pt-4">
            <a href="https://ishanlenin.me" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-lg"> {/* Increased size */}
              Portfolio
            </a>
            <a href="https://github.com/IshanLenin" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-100 transition-colors duration-300 text-lg">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/ishan-lenin/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-lg">
              LinkedIn
            </a>
            <a href="mailto:ishanlenin2006@gmail.com" className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-lg">
              Email
            </a>
          </div>
        </div>
         {/* Optional: Add a subtle scroll-down indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <svg className="animate-bounce w-6 h-6 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-24 px-8 bg-gray-950 bg-opacity-80"> {/* Slightly different background */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I am a second-year Information Science and Technology student at Presidency University, driven by a deep passion for architecting and building robust, real-world applications. My journey is fueled by discipline – honed through 6 days a week of fitness training and countless hours tackling complex engineering challenges. I thrive on the "grind" of turning a difficult idea into a deployed, functional, and scalable product. My goal is to become a world-class engineer, contribute meaningfully to challenging projects, and eventually build my own products that make a real impact.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 md:px-8"> {/* Adjusted padding */}
        <div className="max-w-7xl mx-auto"> {/* Wider container */}
          <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">My Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12"> {/* Adjusted gap for lg */}
            {projects.map((project) => (
              <div key={project.title} className="bg-gray-800 bg-opacity-60 p-6 rounded-xl border border-gray-700 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 flex flex-col transform hover:-translate-y-1"> {/* Enhanced styling */}
                <div className="flex-grow">
                   {/* Optional: Add image/diagram here if you have one per project */}
                   {/* {project.diagramUrl && <img src={project.diagramUrl} alt={`${project.title} Diagram`} className="mb-4 rounded-md"/>} */}
                  <h3 className="text-2xl font-semibold mb-2 text-gray-100">{project.title}</h3> {/* Brighter title */}
                  <p className="text-sm text-blue-400 mb-4 font-medium">{project.subtitle}</p> {/* Colored subtitle */}
                  <p className="text-gray-300 mb-6 text-base leading-relaxed">{project.description}</p> {/* Adjusted text size/leading */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-gray-700 text-gray-300 text-xs font-medium px-3 py-1 rounded-full shadow-sm"> {/* Added shadow */}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-4 mt-auto pt-4 border-t border-gray-700"> {/* Added border top */}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300">
                      Live Demo ↗
                    </a>
                  )}
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white font-medium transition-colors duration-300">
                    GitHub Repo ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Credentials Section */}
      <section id="credentials" className="py-24 px-8 bg-gray-950 bg-opacity-80">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Skills */}
            <div>
              <h2 className="text-4xl font-bold mb-8 text-center md:text-left text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">My Toolkit</h2>
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="mb-8"> {/* Increased bottom margin */}
                  <h3 className="text-xl font-semibold text-blue-400 mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span key={skill} className="bg-gray-700 text-gray-300 text-sm px-4 py-1.5 rounded-full shadow-sm"> {/* Adjusted padding */}
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Education & Certs */}
            <div>
              <h2 className="text-4xl font-bold mb-8 text-center md:text-left text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">Education & Certs</h2>
              <div className="mb-8 p-4 bg-gray-800 bg-opacity-40 rounded-lg border border-gray-700"> {/* Added background/border */}
                 <h3 className="text-xl font-semibold text-blue-400 mb-1">Presidency University, Bengaluru</h3>
                 <p className="text-gray-300">B.Tech in Information Science and Technology</p>
                 <p className="text-gray-500 text-sm">Expected Graduation: May 2028 | CGPA: 8.0/10.0</p>
              </div>
              <div>
                 <h3 className="text-xl font-semibold text-blue-400 mb-4">Certifications</h3>
                 <ul className="space-y-3 text-gray-300"> {/* Increased spacing */}
                  {/* Using standard list items for better accessibility */}
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.469 6.469a.75.75 0 01.011 1.05l-3.25 3.5a.75.75 0 01-1.062.011l-1.75-1.75a.75.75 0 111.05-1.072l1.22 1.22 2.72-2.95a.75.75 0 011.05-.011z" clipRule="evenodd"></path></svg>
                    <a href="https://courses.edx.org/certificates/dbdf9b17c03d4f20a2402557d1a7e182" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 underline underline-offset-2 decoration-dotted hover:decoration-solid">CS50's Introduction to Artificial Intelligence <span className="text-gray-500 text-sm">(HarvardX)</span></a>
                  </li>
                   <li className="flex items-center">
                     <svg className="w-4 h-4 mr-2 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.469 6.469a.75.75 0 01.011 1.05l-3.25 3.5a.75.75 0 01-1.062.011l-1.75-1.75a.75.75 0 111.05-1.072l1.22 1.22 2.72-2.95a.75.75 0 011.05-.011z" clipRule="evenodd"></path></svg>
                    <a href="https://courses.edx.org/certificates/e7f58417285f4f64ac5a1309a921c5d8" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 underline underline-offset-2 decoration-dotted hover:decoration-solid">CS109x: Introduction to Data Science <span className="text-gray-500 text-sm">(HarvardX)</span></a>
                  </li>
                   <li className="flex items-center">
                     <svg className="w-4 h-4 mr-2 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.469 6.469a.75.75 0 01.011 1.05l-3.25 3.5a.75.75 0 01-1.062.011l-1.75-1.75a.75.75 0 111.05-1.072l1.22 1.22 2.72-2.95a.75.75 0 011.05-.011z" clipRule="evenodd"></path></svg>
                    <a href="https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs69/Course/NPTEL25CS69S104220294304454016.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 underline underline-offset-2 decoration-dotted hover:decoration-solid">The Joy of Computing using Python <span className="text-gray-500 text-sm">(NPTEL)</span></a>
                  </li>
                 </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 px-4 border-t border-gray-800 mt-16"> {/* Increased padding/margin */}
        <div className="max-w-6xl mx-auto">
           <p className="text-gray-400 mb-4"> {/* Increased brightness */}
            Let's connect! Always open to discussing tech, fitness, or new opportunities.
          </p>
          <div className="flex justify-center space-x-6 mb-6">
             {/* Re-using links from header for consistency */}
            <a href="https://github.com/IshanLenin" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-100 transition-colors duration-300 text-lg">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/ishan-lenin/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-lg">
              LinkedIn
            </a>
            <a href="mailto:ishanlenin2006@gmail.com" className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-lg">
              Email
            </a>
          </div>
          <p className="text-gray-500 text-sm"> {/* Slightly smaller */}
            &copy; {new Date().getFullYear()} Ishan M Lenin. Built with Next.js, Tailwind CSS, and deployed on Vercel.
          </p>
        </div>
      </footer>
    </main>
  );
}

// Optional: Add some basic CSS for animations if desired
const styles = `
  @keyframes gradient-x {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  .animate-gradient-x {
    background-size: 200% 200%;
    animation: gradient-x 5s ease infinite;
  }
`;

// Inject styles (or use Tailwind's arbitrary variants/plugins for cleaner integration)
// Note: Injecting styles like this is generally discouraged in Next.js/React, 
// prefer CSS Modules or Tailwind config extensions for production apps.
if (typeof window !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

