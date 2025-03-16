import PropTypes from 'prop-types';
import { FaGithub, FaCode } from 'react-icons/fa';


const ProjectComp = ({ project }) => {
  return (
    <div className="flex flex-col md:flex-row border-l-4 border border-slate-700 transition duration-300 hover:border-orange-300 border-solid p-6 md:p-10 shadow-md">

      <div>
        <h2 className="text-2xl font-bold text-amber-500">{project.title}</h2>
        <p className="mb-4 text-white">{project.description}</p>

        {
          project.gitUrl && (
            <a href={project.gitUrl} target="_blank" rel="noopener noreferrer">
              <button className="flex items-center bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-md">
                <FaGithub className="mr-2" />
                View on GitHub
              </button>
            </a>
          )
        }

        {
          project.technology && project.technology.length > 0 && (
            <div className="mt-4">
              <p className="font-semibold flex items-center">
                <FaCode className="mr-2" /> Technology
              </p>
              <ul className="list-disc ml-6 text-white">
                {project.technology.map((tech, techIndex) => (
                  <li key={techIndex}>{tech}</li>
                ))}
              </ul>
            </div>
          )
        }
      </div >
    </div >
  );
};

ProjectComp.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired, // Assuming each project has an id to differentiate
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    gitUrl: PropTypes.string,
    technology: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProjectComp;