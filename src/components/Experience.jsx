const groups = [
  {
    label: 'Experience',
    items: [
      {
        role: 'Software Engineering Intern',
        org: 'Ezre',
        location: 'Washington, D.C.',
        date: 'June 2026-Present',
        context:
          'Accessibility-focused startup building a receipt digitization platform for blind and low-vision users.',
        bullets: [
          'Implementing Square POS API integration for itemized receipt delivery, accessible tipping flows, and signature capture, validated against VoiceOver on iOS and TalkBack on Android across 3+ device configurations. (REST APIs, TypeScript)',
          'Shipped 10+ UI/UX fixes across 3 TestFlight builds and participate in weekly Agile sprints to improve accessibility for blind and low-vision users. (Git, Firebase, Docker, React, Bash)',
        ],
      },
      {
        role: 'Robotics Engineer',
        org: 'BananaBots at UCSC',
        location: 'Santa Cruz, CA',
        date: 'March 2026-Present',
        bullets: [
          'Designed and deployed ML-driven assistive health solutions, engineering sensor fusion pipelines integrating accelerometer and gyroscope data for real-time human activity recognition across 6 activity classes. (Python, NumPy, Arduino, C++)',
          'Architected BananaPuck, a chest-worn wearable health monitor designed for deployment on embedded wearable hardware. (scikit-learn, Flask, Docker, Raspberry Pi)',
        ],
      },
      {
        role: 'VP of Operations',
        org: 'Blueprint at UCSC',
        location: 'Santa Cruz, CA',
        date: 'January 2026-Present',
        bullets: [
          'Directed operational logistics across 4 concurrent projects for cross-functional teams of 20+ developers and designers delivering full-stack software to nonprofit clients.',
          'Facilitated project scoping, sprint coordination, and stakeholder communications across 3 nonprofit clients. (React, FastAPI, Git, Docker, SQL, Firebase)',
        ],
      },
      {
        role: 'Computer Vision Team Member',
        org: 'Rocket Team at UCSC',
        location: 'Santa Cruz, CA',
        date: 'Aug-Dec 2025',
        bullets: [
          'Built a real-time rocket video processor on Raspberry Pi achieving 28 FPS flight tracking over Wi-Fi using OpenCV, NumPy, and PyTorch.',
          'Reduced post-flight algorithm error rate by 18% through TensorFlow and scikit-learn optimization.',
        ],
      },
      {
        role: 'Founder',
        org: 'Bay Area Hacks Society',
        location: 'Bay Area, CA',
        date: '2024-Present',
        context:
          'Founded a student hackathon organization in the Bay Area connecting student builders across disciplines.',
        bullets: [],
      },
    ],
  },
  {
    label: 'Research',
    items: [
      {
        role: 'Undergraduate Researcher',
        org: 'AI Explainability and Accountability Lab',
        location: 'UC Santa Cruz',
        date: 'June 2026-Present',
        bullets: [
          'Investigating neural explanations for LLMs through compositional explanation generation for LSTM models on Natural Language Inference tasks and researching Self-Explaining Neural Networks through the Memory Wrap architecture.',
          'Running reinforcement learning baselines with Stable Baselines 3 and Gymnasium on autonomous vehicle perception pipelines in CARLA and Vista simulation environments across 4 driving scenarios.',
        ],
      },
      {
        role: 'Undergraduate Researcher',
        org: 'Tech4Good Generative AI Lab',
        location: 'UC Santa Cruz',
        date: 'January 2026-Present',
        bullets: [
          'Designing and evaluating multi-agent orchestration systems using Google ADK and Gemini across 3 agent architectures for persistent chatbot memory, benchmarking latency improvements of 22% over baseline.',
          'Building RAG pipelines with Pinecone vector databases and integrating MCP servers for tool-augmented agentic workflows, benchmarking agent performance across 5 evaluation dimensions.',
        ],
      },
    ],
  },
  {
    label: 'Extracurriculars',
    items: [
      {
        role: 'Fundraising Chair',
        org: 'Project RISHI at UCSC',
        location: 'Santa Cruz, CA',
        date: 'March 2026-Present',
        context:
          'Organizing fundraising initiatives to support sustainable development resources and education for underserved rural communities, coordinating outreach across 30+ donors.',
        bullets: [],
      },
      {
        role: 'Eagle Scout',
        org: 'Boy Scouts of America',
        location: '',
        date: '2017-2024',
        context:
          '350+ hours of community service with leadership as Assistant Senior Patrol Leader and Patrol Leader.',
        bullets: [],
      },
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="relative px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="reveal max-w-3xl">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.45em] text-portfolio-accent">
            Experience
          </p>
          <h2 className="mt-4 font-heading text-4xl font-bold tracking-[-0.05em] text-portfolio-primary sm:text-6xl">
            Applied engineering across startups, labs, and student teams.
          </h2>
        </div>

        <div className="mt-16 space-y-16">
          {groups.map((group) => (
            <div key={group.label} className="reveal grid gap-8 lg:grid-cols-[0.28fr_0.72fr]">
              <h3 className="font-heading text-2xl font-bold text-portfolio-primary lg:sticky lg:top-28 lg:h-fit">
                {group.label}
              </h3>

              <div className="relative border-l border-portfolio-border pl-7 sm:pl-10">
                {group.items.map((item) => (
                  <article key={`${item.role}-${item.org}`} className="relative pb-12 last:pb-0">
                    <span className="absolute -left-[35px] top-2 h-4 w-4 rounded-full border border-portfolio-accent bg-portfolio-bg shadow-[0_0_24px_rgba(91,156,246,0.55)] sm:-left-[47px]" />
                    <div className="rounded-[1.75rem] border border-portfolio-border bg-portfolio-surface/50 p-6 backdrop-blur-md">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h4 className="font-heading text-2xl font-bold text-portfolio-primary">
                            {item.role}
                          </h4>
                          <p className="mt-2 text-lg font-semibold text-portfolio-accent">{item.org}</p>
                          {item.location && (
                            <p className="mt-1 text-sm uppercase tracking-[0.22em] text-portfolio-muted">
                              {item.location}
                            </p>
                          )}
                        </div>
                        <p className="text-sm font-bold uppercase tracking-[0.22em] text-portfolio-muted">
                          {item.date}
                        </p>
                      </div>

                      {item.context && (
                        <p className="mt-5 text-base leading-7 text-portfolio-muted">{item.context}</p>
                      )}

                      {item.bullets.length > 0 && (
                        <ul className="mt-5 space-y-3 text-base leading-7 text-portfolio-muted">
                          {item.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-3">
                              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-portfolio-accent" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
