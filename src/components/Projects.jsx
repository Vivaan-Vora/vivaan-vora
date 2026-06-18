const projects = [
  {
    id: 'routix',
    name: 'Routix',
    href: 'https://github.com/Vivaan-Vora/Routix',
    description:
      '2D and 3D warehouse navigation simulator combining classical pathfinding and reinforcement learning. Trains agents through dynamic obstacle environments using Q-learning and DQN, with built-in diagnostics, failure analysis, and benchmarking.',
  },
  {
    id: 'cad-proj',
    name: '65DegreeCradle',
    href: 'https://github.com/Vivaan-Vora/cad-proj',
    description:
      'Parametric phone cradle built in Onshape for desk use and FDM 3D printing. Fixed 65° viewing angle with integrated cable cutout, stable weighted base, filletted printable walls, and named design variables for fast iteration.',
  },
  {
    id: 'pid-inverted-pendulum-simulation',
    name: 'PID Inverted Pendulum Simulation',
    href: 'https://github.com/Vivaan-Vora/PID-Inverted-Pendulum-Simulation',
    description:
      'Real-time simulation of an inverted pendulum with a tunable PID controller. Implements closed-loop control with configurable proportional, integral, and derivative gains alongside live state visualization.',
  },
  {
    id: 'ros2-sensor-fusion-and-autonomous-control',
    name: 'ROS2 Sensor Fusion And Autonomous Control',
    href: 'https://github.com/Vivaan-Vora/ROS2-Sensor-Fusion-And-Autonomous-Control',
    description:
      'Real-time localization system for a differential-drive robot using LIDAR, IMU, and wheel encoder data. Implements an Extended Kalman Filter within a ROS2 navigation stack with configurable sensor tuning.',
  },
]

function Projects() {
  return (
    <section id="projects" className="relative px-5 py-28 sm:px-8">
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-portfolio-accent/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="reveal max-w-3xl">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.45em] text-portfolio-accent">
            Projects
          </p>
          <h2 className="mt-4 font-heading text-4xl font-bold tracking-[-0.05em] text-portfolio-primary sm:text-6xl">
            Control systems, robotics, and applied engineering.
          </h2>
        </div>

        <div className="reveal mt-14 max-w-4xl space-y-6">
          {projects.map((project) => (
            <p key={project.id} className="text-lg leading-8 text-portfolio-muted">
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="text-xl font-semibold text-portfolio-primary transition-colors duration-300 hover:text-portfolio-accent"
              >
                {project.name}
              </a>
              {' '}
              &mdash; {project.description}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
