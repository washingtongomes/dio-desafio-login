import { IsNever, ValidationValue } from "react-hook-form/dist/types";
import { BooleanSchema } from "yup";

export interface IButtonProps {
    title: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled:boolean;
}