import SignupForm from "../features/auth/SignupForm";
import Logo from "../ui/Logo";
import { Container } from "./Login";

function Signup() {
  return (
    <Container>
      <Logo />
      <SignupForm />
    </Container>
  );
}

export default Signup;
