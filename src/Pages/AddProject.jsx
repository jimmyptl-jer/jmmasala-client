
// import BusinessForm from '../forms/BusinessForm';
import BusinessForm from '../Forms/ProjectForm/ManageProjectForm';

const AddProject = () => {
  return (
    <div className="min-h-screen mt-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Add Business</h1>
        {/* <BusinessForm /> */}
        <BusinessForm />
      </div>
    </div>
  );
};

export default AddProject;
