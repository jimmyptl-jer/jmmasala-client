import { useMutation } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type ContactSubmission = {
  name: string;
  email?: string;
  subject: string;
  message: string;
};

export const useContact = () => {
  const createContactRequest = async (contact: ContactSubmission) => {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });

    if (!response.ok) {
      throw new Error("Sorry! There was an error while sending your message.");
    }
  };

  const {
    mutateAsync: createUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(createContactRequest);

  if (isSuccess) {
    toast.success("Your message has been successfully sent.");
  }

  if (isError) {
    toast.error("Sorry! There was an error while sending your message.");
  }

  return {
    createUser,
    isLoading,
  };
};
