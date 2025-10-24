import SendMailForm from "../form/sendMailForm";
import { useContact } from "@/api/ContactApi";

const SendMailPage = () => {
  const { createUser, isLoading } = useContact();

  return (
    <div className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Contact Form */}
        <div>
          <SendMailForm onSave={createUser} isLoading={isLoading} />
        </div>

      </div>
    </div>
  );
};

export default SendMailPage;