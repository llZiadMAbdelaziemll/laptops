import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const RegitserShapeContainer = styled.div`
  width: 410px;
  margin: auto;
  margin-top: 30px;
`;

const RegitserShape = styled.div`
  width: 100%;
  padding: 15px;
  background-color: #0e1011;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
`;

const RegShapeUnderline = styled.div`
  position: relative;
  text-align: center;
  margin-top: 20px;
  &:before,
  &:after {
    content: "";
    position: absolute;
    top: -5px;
    width: 40%;
    border-bottom: solid 1px white;
  }
  &:before {
    left: 0;
  }

  &:after {
    right: 0%;
  }
`;

const Or = styled.span`
  position: absolute;
  top: -15px;
  left: 47%;
`;

const Already = styled.div`
  padding-top: 8px;
  font-size: 16px;
`;

const Link = styled.a`
  padding-left: 5px;
  cursor: pointer;
  color: #0d8b9f;
`;

function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }
  function handleHaveAcc(e) {
    e.preventDefault();
    navigate("/signup");
  }
  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical>
        <Input
          inputType="regular"
          type="email"
          id="email"
          placeholder="Email address*"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical>
        <Input
          inputType="regular"
          type="password"
          id="password"
          placeholder="Password*"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="medium" variation="login" disabled={isLoading}>
          {!isLoading ? "Log in" : <SpinnerMini />}
        </Button>
      </FormRowVertical>

      <RegitserShapeContainer>
        <RegitserShape>Log in</RegitserShape>
        <RegShapeUnderline>
          <Or>OR</Or>
        </RegShapeUnderline>
      </RegitserShapeContainer>
      <Already>
        i don't have account ? <Link onClick={handleHaveAcc}>sign up</Link>
      </Already>
    </Form>
  );
}

export default LoginForm;
