import { useFormContext } from "react-hook-form";

const CategorySection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Category</h2>
      <div className="flex flex-col gap-3">
        <label className="text-orange-300 text-sm flex-1">
          Category
          <input
            type="text"
            className="border rounded w-full py-1 px-2 font-normal bg-black"
            {...register("category", { required: "This field is required" })}
          />
          {errors.title && (
            <span className="text-red-500">{errors.title.message}</span>
          )}
        </label>

      </div>
      {errors.category && (
        <span className="text-red-500 text-sm font-bold">
          {errors.category.message}
        </span>
      )}
    </div>
  );
};

export default CategorySection;
