import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Container, LoginContainer, Column, Spacing, Title } from "./styles";
import { defaultValues, IFormLogin } from "./types";


  const schema = yup.object({
    email: yup.string().email("E-mail inválido").max(40, "Tamanho maximo de 40 Caracteres...").required("Campo obrigatório"),
    password: yup.string().min(6, "No minimo 06 caracteres").max(6, "Tamanho maximo de 06 Caracteres...").required("Campo obrigatório"),
    
  })
  .required();

const Login = () => {

  const {
    control, formState: { errors, isValid }} = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues,
    reValidateMode: "onChange", 
  
     });

 

  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <Spacing />
          <Input
            name="email"
            placeholder="Email"
            control={control}
            errorMessage={errors?.email?.message}

          />
          <Spacing />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            control={control}
            errorMessage={errors?.password?.message}

          />
             
          <Spacing />
          <Button title="Entrar" disabled={!isValid} />
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Login ; 
