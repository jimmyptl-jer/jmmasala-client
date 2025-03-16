import InfoSection from "../Components/InfoSection";

const About = () => {
  return (
    <div className="container mx-auto p-8 md:p-16 text-justify  text-white">
      <div className="text-zone animate-fadeIn space-y-6">
        {/* Header Section */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-gradient">
          About Me
        </h1>

        {/* Paragraphs with subtle animations */}
        <p className="text-lg md:text-xl mb-4 animate-slideIn">
          <strong className="text-orange-400">Meet Jimmy</strong>, a <span className="highlight">Certified AWS Solutions Architect</span> with a strong focus on <span className="text-orange-400 font-semibold">Backend Development</span> and <span className="text-orange-400 font-semibold">Cloud Expertise</span>. My journey in the tech world is fueled by a passion for crafting efficient, scalable solutions and a dedication to continuous learning. Armed with certifications like <strong>AWS Solutions Architect - Associate</strong> and progressing toward <span className="text-orange-400 font-semibold">Terraform</span> and <span className="text-orange-400 font-semibold">Kubernetes</span>, I am well-equipped to navigate the ever-evolving tech landscape.
        </p>

        <p className="text-lg md:text-xl mb-4 animate-fadeIn delay-100">
          I thrive at the intersection of <strong>Software Development</strong> and <strong>DevOps</strong>, bringing a blend of creativity and precision to every project I undertake. My expertise spans technologies such as <span className="text-orange-400 font-semibold">AWS</span>, <span className="text-orange-400 font-semibold">Terraform</span>, <span className="text-orange-400 font-semibold">Kubernetes</span>, <span className="text-orange-400 font-semibold">Docker</span>, and <span className="text-orange-400 font-semibold">CI/CD pipelines</span>.
        </p>

        <p className="text-lg md:text-xl mb-4 animate-slideIn delay-200">
          Recently, I have been diving deeper into the <span className="highlight">MERN stack</span> and utilizing <strong>TypeScript</strong> with <strong>Node.js</strong> for backend development. I’ve deployed full-stack applications on <strong>Kubernetes</strong> and integrated them with robust <strong>CI/CD pipelines</strong>. My portfolio includes projects where I’ve designed cloud architectures with <span className="text-orange-400">Terraform</span>, built scalable APIs, and implemented automated testing and linting workflows to ensure quality and efficiency.
        </p>

        <p className="text-lg md:text-xl mb-4 animate-fadeIn delay-300">
          Beyond technical expertise, I excel in <span className="highlight">problem-solving</span> and <span className="text-orange-400 font-semibold">collaboration</span>. Whether debugging intricate code or optimizing deployment pipelines, I approach every challenge with a positive mindset, practical solutions, and a passion for teamwork.
        </p>

        <p className="text-lg md:text-xl mb-4 animate-slideIn delay-400">
          I am well-versed in <strong>Software Development Life Cycle (SDLC)</strong> methodologies like <span className="highlight">Agile</span> and <span className="text-orange-400">Scrum</span>. My ability to contribute to all stages of a project ensures seamless progress, whether planning sprints, managing tasks, or delivering milestones.
        </p>

        <p className="text-lg md:text-xl mb-4 animate-fadeIn delay-500">
          As I continue to expand my expertise, I aim to establish myself as a <strong>Backend Developer with Cloud Expertise</strong>, building robust, scalable solutions for businesses. <span className="highlight">The future holds limitless possibilities</span>, and I am ready to take on new challenges with innovation and determination.
        </p>
      </div>

      <div>
        <InfoSection />
      </div>
    </div>
  );
};

export default About;
