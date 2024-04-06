import styled from "styled-components";
import Logo from "../ui/Logo";
import LoginForm from "../features/auth/LoginForm";

export const Container = styled.main`
  background-color: var(--color-cyan-950);
  height: 100dvh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

function Login() {
  return (
    <Container>
      <Logo />
      <LoginForm />
    </Container>
  );
}

export default Login;
