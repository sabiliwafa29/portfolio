import { useState, useEffect } from 'react'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulated API call - replace with actual API endpoint
    // fetch('http://localhost:8000/api/projects.php')
    const mockProjects = [
      {
        id: 1,
        title: "Paradise Of Indonesia",
        description: "ParadiseOfIndonesia is a Laravel web application project, presumably focused on showcasing Indonesian tourism destinations or cultural content.",
        technologies: ["Blade", "PHP", "Laravel", "PostgreSQL"],
        link: "https://github.com/sabiliwafa29/ParadiseOfIndonesia"
      },
      {
        id: 2,
        title: "URL Shortener Web App",
        description: "A production-ready URL shortener backend API built with Node.js, Express, PostgreSQL, and Redis that features JWT authentication, click analytics, QR code generation, and rate limiting.",
        technologies: ["JavaScript", "Dockerfile", "PostgreSQL"],
        link: "https://github.com/sabiliwafa29/url-shortner"
      },
      {
        id: 3,
        title: "Pixel Art Generator",
        description: "Convert images to pixel art with customizable resolution and color palettes.",
        technologies: ["Python", "PIL", "Flask"],
        link: "https://github.com/example/pixel-art-generator"
      }
    ]

    setTimeout(() => {
      setProjects(mockProjects)
      setLoading(false)
    }, 500)
  }, [])

  return (
    <section id="projects" className="py-20 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-retro text-2xl md:text-3xl mb-4">
            ═══ MY PROJECTS ═══
          </h2>
          <p className="font-pixel text-xl">
            Here are some things I've built
          </p>
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="text-center">
            <p className="font-pixel text-xl animate-pulse">LOADING...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white text-black border-4 border-white p-6 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-150"
              >
                {/* Project Number */}
                <div className="font-retro text-sm mb-4 opacity-50">
                  PROJECT_{String(index + 1).padStart(2, '0')}
                </div>

                {/* Project Title */}
                <h3 className="font-retro text-lg mb-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-pixel text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-pixel text-sm px-3 py-1 border-2 border-black"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-pixel text-lg inline-flex items-center gap-2 hover:underline"
                >
                  VIEW PROJECT →
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Decorative Element */}
        <div className="mt-16 text-center font-pixel text-lg opacity-50">
          ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
        </div>
      </div>
    </section>
  )
}

export default Projects
