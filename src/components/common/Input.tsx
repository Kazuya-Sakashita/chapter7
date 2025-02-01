import React from "react";
import { UseFormRegister, FieldError } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import { InputProps } from "../../types/commonTypes";

const Input: React.FC<InputProps> = ({
  id,
  type = "text",
  register,
  errors,
  ...props
}) => {
  return (
    <div className="w-full">
      <input
        id={id}
        type={type}
        className={`border rounded-lg p-4 w-full ${
          errors ? "border-red-500" : "border-gray-300"
        }`}
        {...register}
        {...props}
      />
      {/* ErrorMessage コンポーネントを使用 */}
      {errors?.message && <ErrorMessage message={errors.message} />}
    </div>
  );
};

export default Input;
