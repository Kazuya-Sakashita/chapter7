import React, {
  ElementType,
  ComponentPropsWithoutRef,
  forwardRef,
} from "react";
import { FieldError } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

type InputProps<T extends ElementType> = {
  as?: T;
  errors?: FieldError;
} & ComponentPropsWithoutRef<T>;

const Input = forwardRef(
  <T extends ElementType = "input">(
    { as, errors, className, ...props }: InputProps<T>,
    ref: React.Ref<any>
  ) => {
    const Component = as || "input"; // `input` をデフォルトとし、`textarea` などを切り替え可能に

    return (
      <div className="w-full">
        <Component
          ref={ref}
          {...props}
          className={`border rounded-lg p-4 w-full ${
            errors ? "border-red-500" : "border-gray-300"
          } ${className}`}
        />
        {errors?.message && <ErrorMessage message={errors.message} />}
      </div>
    );
  }
);

export default Input;
