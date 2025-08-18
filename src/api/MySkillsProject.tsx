import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";
import { Project } from "@/types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetMySkillsProject = () => {
  const getSkillsProjectRequest = async (): Promise<Project[]> => {
    const response = await fetch(`${API_BASE_URL}/api/skillsProject`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }

    const data = await response.json();
    return data?.data ?? []; // Optional chaining for safety
  };

  const {
    data: skillsProject,
    isLoading,
    error,
  } = useQuery("fetchSkillsProject", getSkillsProjectRequest);

  if (error instanceof Error) {
    toast.error(error.message || "Failed to fetch Skills & Projects");
  }

  return {
    skillsProject,
    isLoading,
  };
};

type ProjectCreation = {
  title: string;
  description: string;
  gitUrl: string;
  technology: string;
  icons: string;
};

export const useProjectCreate = () => {
  const createProjectRequest = async (project: ProjectCreation) => {
    const response = await fetch(`${API_BASE_URL}/api/project`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    });

    if (!response.ok) {
      throw new Error("Sorry! There was an error while creating your post.");
    }
  };

  const {
    mutateAsync: createProject,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(createProjectRequest);

  if (isSuccess) {
    toast.success("Project created successfully.");
  }

  if (isError) {
    toast.error("Sorry! There was an error while adding project.");
  }

  return {
    createProject,
    isLoading,
  };
};
