import React from "react";
import { WithChildren } from "../../types/commonTypes";

interface LabelProps extends WithChildren {
  htmlFor: string;
}

const Label: React.FC<LabelProps> = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="w-[240px] font-bold text-gray-800">
      {children}
    </label>
  );
};

export default Label;
