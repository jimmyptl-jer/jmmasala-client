const API_BASE_URL = "https://graywolg-api.onrender.com" || 'http://localhost:3000'

// const API_BASE_URL = 'http://localhost:3000'


export const contact = async (data) => {
  const response = await fetch(`${API_BASE_URL}/api/contact`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  const responseBody = await response.json()

  if (!response.ok) {
    throw new Error(responseBody.message)
  }
}

import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";

export const useCreateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createUserRequest = async (user) => {
    const accessToken = await getAccessTokenSilently();
    console.log("Access Token:", accessToken);

    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }
  };

  const {
    mutateAsync: createUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(createUserRequest);

  return {
    createUser,
    isLoading,
    isError,
    isSuccess,
  };
};


export const fetchProjects = async () => {
  const response = await fetch(`${API_BASE_URL}/api/project/getProjects`);

  if (!response.ok) {
    // You can decide what to do when the response is not okay, for example, return an empty array.
    console.error(`Failed to get projects. Status: ${response.status}`);
    return [];
  }

  return response.json();
};

export const addPost = async (data) => {
  const response = await fetch(`${API_BASE_URL}/api/post`, {
    method: 'POST',
    credentials: "include",
    body: data
  })

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }
}

export const getAllPost = async () => {
  const response = await fetch(`${API_BASE_URL}/api/post`, {
    credentials: "include"
  });

  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }

  return response.json();
};