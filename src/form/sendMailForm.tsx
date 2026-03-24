import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().optional(),
  subject: z.string(),
  message: z.string().min(1, "Message is required"),
});

type Props = {
  onSave: (userProfileData: sendMailFormData) => void;
  isLoading: boolean;
};

type sendMailFormData = z.infer<typeof formSchema>;

const SendMailForm = ({ onSave, isLoading }: Props) => {
  const form = useForm<sendMailFormData>({
    resolver: zodResolver(formSchema),
  });

  return (
    <form
      onSubmit={form.handleSubmit(onSave)}
      className="space-y-6 rounded-xl shadow-lg p-8 transition-transform transform hover:scale-105 duration-500"
    >
      <h2 className="text-3xl font-bold text-green-300">Contact Me</h2>
      <p>
        Reach out for collaboration, new projects, or just to say hello. I'd
        love to hear from you!
      </p>

      {/* Name Input */}
      <div>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-700 bg-black text-white rounded focus:outline-none focus:border-green-300"
          {...form.register("name", { required: "This field is required" })}
        />
      </div>

      {/* Email Input */}
      <div>
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-700 bg-black text-white rounded focus:outline-none focus:border-green-300"
          {...form.register("email", { required: "This field is required" })}
        />
      </div>

      {/* Subject Input */}
      <div>
        <input
          type="text"
          placeholder="Subject"
          className="w-full p-3 border border-gray-700 bg-black text-white rounded focus:outline-none focus:border-green-300"
          {...form.register("subject", { required: "This field is required" })}
        />
      </div>

      {/* Message Input */}
      <div>
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full p-3 border border-gray-700 bg-black text-white rounded focus:outline-none focus:border-green-300"
          {...form.register("message", { required: "This field is required" })}
        ></textarea>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-green-300 text-black py-3 rounded font-semibold hover:bg-green-500 transition duration-300"
        >
          {isLoading ? "Saving..." : "Save"}
        </button>
      </div>
    </form>
  );
};

export default SendMailForm;