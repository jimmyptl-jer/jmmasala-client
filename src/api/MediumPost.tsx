import { MediumPost } from "@/types";
import { useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Fetch certificates hook
export const useGetMediumArticle = () => {
  const getMediumArticleRequest = async (): Promise<MediumPost[]> => {
    const response = await fetch(`${API_BASE_URL}/api/medium-posts`, {
      method: "GET",
    });

    // Handle unsuccessful response
    if (!response.ok) {
      throw new Error("Failed to fetch medium articles");
    }

    const data = await response.json(); // The full response object
    return data
  };

  const { data, isLoading, error } = useQuery(
    "fetchMediumArticle",
    getMediumArticleRequest,
  );

  // Optional: You can handle error messages in the component where this hook is used
  if (error) {
    toast.error("Failed to fetch certificates");
  }

  return {
    articles: data ?? [],
    isLoading,
  };
};
