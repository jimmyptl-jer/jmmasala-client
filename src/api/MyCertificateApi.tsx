import { Certificate } from "@/types";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Fetch certificates hook
export const useGetMyCertificate = () => {
  const getCertificateRequest = async (): Promise<Certificate[]> => {
    const response = await fetch(`${API_BASE_URL}/api/certificate`, {
      method: "GET",
    });

    // Handle unsuccessful response
    if (!response.ok) {
      throw new Error("Failed to fetch certificates");
    }

    const data = await response.json(); // The full response object
    return data.certificates ?? []; // Ensure you return certificates array directly
  };

  const { data, isLoading, error } = useQuery(
    "fetchCertificates",
    getCertificateRequest,
  );

  // Optional: You can handle error messages in the component where this hook is used
  if (error) {
    toast.error("Failed to fetch certificates");
  }

  return {
    certificates: data ?? [],
    isLoading,
  };
};

// Certificate creation hook
type CertificateCreation = {
  title: string;
  issuer: string;
  description: string;
  link: string;
};

export const useCertificateCreate = () => {
  const createCertificateRequest = async (certificate: CertificateCreation) => {
    const response = await fetch(`${API_BASE_URL}/api/certificate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(certificate),
    });

    if (!response.ok) {
      throw new Error("Sorry! There was an error while creating your post.");
    }

    return response.json();
  };

  const {
    mutateAsync: createCertificate,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(createCertificateRequest);

  if (isError) {
    toast.error("Sorry! There was an error while creating your post.");
  }

  if (isSuccess) {
    toast.success("Certificate created successfully");
  }

  // Move toast notifications to the component to give more control
  return {
    createCertificate,
    isLoading,
  };
};
