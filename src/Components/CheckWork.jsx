import { Link } from 'react-router-dom';

const CheckOutMyWork = () => {
  return (
    <div className="text-center p-8 rounded-md shadow-md  m-10">
      <h1 className="text-4xl font-bold mb-4 text-orange-300">Explore My Projects <span role="img" aria-label="Developer">👨‍💻</span></h1>
      <p className="text-gray-200 mb-6">Discover the world of code behind my projects!</p>
      <Link to="/project">
        <button className="text-white py-2 px-4 transition duration-300 ease-in-out bg-transparent hover:bg-orange-300 focus:outline-none focus:shadow-outline-purple active:bg-orange-300">
          Go to Projects
        </button>
      </Link>
    </div>
  );
};

export default CheckOutMyWork;
