

import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick , disabled}: IButtonProps) => {
   
  return <ButtonContainer  disabled={disabled}id="buttonControl" onClick={onClick}>{title}</ButtonContainer>;
  
};
export default Button;
