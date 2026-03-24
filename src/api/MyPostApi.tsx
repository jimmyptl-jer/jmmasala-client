import { Post } from "@/types";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetMyPost = () => {
  // Function to make the GET request to fetch the current user's details
  const getPostRequest = async (): Promise<Post> => {
    // Make the GET request to the API with Authorization header
    const response = await fetch(`${API_BASE_URL}/api/post`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json", // Specify content type as JSON
      },
    });

    // Handle unsuccessful response
    if (!response.ok) {
      throw new Error("Failed to post");
    }

    return response.json(); // Return the user data as JSON
  };

  // React Query's useQuery hook to fetch data asynchronously
  const {
    data: post, // Store the fetched user data
    isLoading, // Track loading state
    error, // Store any errors during fetching
  } = useQuery("fetchPost", getPostRequest);

  // Display error toast if the request fails
  if (error) {
    toast.error("Failed to fetch post");
  }

  // Return the current user data and loading state
  return {
    post,
    isLoading,
  };
};

type PostCreation = {
  title: string;
  description: string;
  videoLink: string;
  blogLink: string;
};

export const usePostCreate = () => {
  const createPostRequest = async (post: PostCreation) => {
    const response = await fetch(`${API_BASE_URL}/api/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });

    if (!response.ok) {
      throw new Error("Sorry! There was an error while creating your post.");
    }
  };

  const {
    mutateAsync: createPost,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(createPostRequest);

  if (isSuccess) {
    toast.success("Post created successfully.");
  }

  if (isError) {
    toast.error("Sorry! There was an error while creating your post.");
  }

  return {
    createPost,
    isLoading,
  };
};
