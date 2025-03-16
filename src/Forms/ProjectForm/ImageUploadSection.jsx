
import { useFormContext } from "react-hook-form";

const ImageSection = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <label className="text-gray-700 text-sm font-bold">
      Upload Image
      <input
        type="file"
        className="border rounded w-full py-1 px-2 font-normal"
        accept="image/*"
        {...register("imageFile")}
      />
      {errors.imageFile && (
        <span className="text-red-500">{errors.imageFile.message}</span>
      )}
    </label>
  );
};

export default ImageSection;
