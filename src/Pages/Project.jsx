import { useState, useEffect } from 'react';
import ProjectComp from '../Components/ProjectComp';
import * as apiClient from '../http';

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await apiClient.fetchProjects();
        setProjects(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchProjects();

    // Clean up function to prevent memory leaks
    return () => {
      setProjects([]);
      setIsLoading(true);
      setError(null);
    };
  }, []);

  return (
    <div className="p-3 mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Projects</h1>

      {isLoading ? (
        <p>Loading projects...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div className="grid grid-row gap-4 text-justify">
          {projects.map((project) => (
            <ProjectComp key={project._id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Project;
