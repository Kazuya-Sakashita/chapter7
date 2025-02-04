import React from "react";
import { ErrorMessageProps } from "../../types/commonTypes";

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <p className="text-red-500 text-sm mt-1">{message}</p>;
};

export default ErrorMessage;
