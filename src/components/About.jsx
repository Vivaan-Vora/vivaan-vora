import fallbackHeadshot from '../assets/headshot-placeholder.svg'

const headshotModules = import.meta.glob('../assets/headshot.jpg', {
  eager: true,
  query: '?url',
  import: 'default',
})

const headshotUrl = headshotModules['../assets/headshot.jpg'] || fallbackHeadshot

const skillGroups = [
  {
    label: 'Languages',
    skills: ['Python', 'C', 'C++', 'TypeScript', 'JavaScript', 'Java', 'MATLAB', 'HTML/CSS', 'SQL', 'Bash'],
  },
  {
    label: 'Frameworks & Tools',
    skills: ['React', 'FastAPI', 'Flask', 'Streamlit', 'Google ADK', 'Firebase', 'Docker', 'Git', 'REST APIs', 'Pinecone', 'LangChain'],
  },
  {
    label: 'ML/AI',
    skills: ['PyTorch', 'TensorFlow', 'OpenCV', 'NumPy', 'scikit-learn', 'RAG Pipelines', 'Multi-Agent Systems', 'MCP Servers'],
  },
  {
    label: 'Hardware & CAD',
    skills: ['Raspberry Pi', 'Arduino', 'SolidWorks', 'Fusion 360', '3D Printing'],
  },
]

function About() {
  return (
    <section id="about" className="relative px-5 py-28 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.86fr_1.14fr] md:items-start">
        <div className="reveal relative">
          <div className="absolute -inset-5 rounded-[3rem] bg-portfolio-accent/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.25rem] border border-portfolio-accent/30 bg-portfolio-surface p-3 shadow-[0_0_80px_rgba(91,156,246,0.14)]">
            <img
              src={headshotUrl}
              alt="Vivaan Vora"
              className="aspect-square w-full rounded-[1.65rem] object-cover"
            />
          </div>
        </div>

        <div>
          <p className="reveal font-heading text-sm font-bold uppercase tracking-[0.45em] text-portfolio-accent">
            About
          </p>
          <h2 className="reveal mt-4 max-w-3xl font-heading text-4xl font-bold tracking-[-0.05em] text-portfolio-primary sm:text-6xl">
            Engineering for systems that leave the screen.
          </h2>
          <div className="reveal mt-8 space-y-5 text-lg leading-8 text-portfolio-muted">
            <p>
              I am a robotics engineering student at UC Santa Cruz building across software,
              electronics, and mechanical design. My work spans agentic AI pipelines, ML
              classifiers, robotic control systems, and assistive technology for real-world
              constraints.
            </p>
            <p>
              Right now I am working on accessible receipt digitization at Ezre, multi-agent
              orchestration and RAG workflows in the Tech4Good Generative AI Lab, and neural
              explanation research in the AI Explainability and Accountability Lab.
            </p>
          </div>

          <div className="mt-12 grid gap-6">
            {skillGroups.map((group) => (
              <div key={group.label} className="reveal rounded-3xl border border-portfolio-border bg-portfolio-surface/55 p-5">
                <h3 className="font-heading text-lg font-bold text-portfolio-primary">{group.label}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-portfolio-border bg-portfolio-bg/70 px-3 py-2 text-sm text-portfolio-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
