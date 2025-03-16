import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate()

  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-col gap-6 justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <button
          type="button"
          onClick={() => navigate('/add-project')}
          className="btn-primary border text-white px-5 py-3 font-normal text-base cursor-pointer text-center transition duration-500  hover:bg-orange-300 hover:border-none  mr-4"
        >
          Add Post
        </button>

        <button
          type="button"
          onClick={() => navigate('/add-project')}
          className="btn-primary border text-white px-5 py-3 font-normal text-base cursor-pointer text-center transition duration-500  hover:bg-orange-300 hover:border-none  mr-4"
        >
          Add Project
        </button>

      </div>

    </div>
  );
};

export default Dashboard;
