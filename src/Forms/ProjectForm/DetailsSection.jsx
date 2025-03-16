import { useFormContext } from "react-hook-form";

const DetailsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold mb-3">Add Project</h1>
      {/* Title Input */}
      <label className="text-orange-300 text-sm flex-1">
        Title
        <input
          type="text"
          className="border rounded w-full py-1 px-2 font-normal bg-black"
          {...register("title", { required: "This field is required" })}
        />
        {errors.title && (
          <span className="text-red-500">{errors.title.message}</span>
        )}
      </label>

      {/* Description Textarea */}
      <label className="text-orange-300 text-sm flex-1">
        Description
        <textarea
          rows={10}
          className="border rounded w-full py-1 px-2 font-normal bg-black"
          {...register("description", { required: "This field is required" })}
        />
        {errors.description && (
          <span className="text-red-500">{errors.description.message}</span>
        )}
      </label>

      {/* Video Link Input */}
      <label className="text-orange-300 text-sm  flex-1">
        Video Link
        <input
          type="text"
          className="border rounded w-full py-1 px-2 font-normal bg-black"
          {...register("videoLink")}
        />
      </label>

      {/* Blog Link Input */}
      <label className="text-orange-300 text-sm flex-1">
        Blog Link
        <input
          type="text"
          className="border rounded w-full py-1 px-2 font-normal bg-black"
          {...register("blogLink")}
        />
      </label>
    </div>
  );
};

export default DetailsSection;
