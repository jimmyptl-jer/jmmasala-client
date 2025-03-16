import { useAuth0 } from "@auth0/auth0-react";
import GrayWolf from "../assets/logo.png";

const Register = () => {
  const { loginWithRedirect } = useAuth0();

  const handleRegister = async () => {
    await loginWithRedirect({
      screen_hint: "signup", // Hint to show the signup page instead of login
    });
  };

  return (
    <div className="min-h-screen mt-10">
      <div className="flex max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10">
        <div className="flex-1 items-center flex-col justify-center">
          <img
            src={GrayWolf}
            alt="Logo"
            className="w-50 h-50 object-contain justify-center"
          />
          <p className="text-center mt-2">
            Welcome to My Community!
            <span className="block font-normal">
              Let create, inspire, and build a supportive community where ideas thrive. Welcome aboard!
            </span>
          </p>
        </div>

        <div className="flex-1">
          <div className="flex flex-col gap-4">
            <button
              onClick={handleRegister}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Register with Auth0
            </button>
          </div>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <a href="/login" className="text-blue-500">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;