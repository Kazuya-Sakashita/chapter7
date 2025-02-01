// src/types/commonTypes.ts
import { ReactNode } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

export interface WithChildren {
  children: ReactNode;
}

export interface InputProps {
  id: string;
  type?: string;
  register: ReturnType<UseFormRegister<any>>;
  errors?: FieldError;
  [key: string]: any; // その他のプロパティを許容
}

export interface ErrorMessageProps {
  message: string;
}
