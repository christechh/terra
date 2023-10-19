import { Variant } from "../../../base-components/Button/Button.vue";

export interface ISimpleFormButtons {
  text: string;
  type?: "button" | "submit" | "reset";
  variant: Variant;
  loading?: boolean;
  onClick: (data: any) => void;
}

export interface ISimpleFormInputs {
  label: string;
  name: string;
  required?: boolean;
  disabled?: boolean;
  type?: "text" | "email" | "password";
  placeholder?: string;
  component?: "input" | "select" | "switch";
}
