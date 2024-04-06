import { Button, Input } from "@mui/material";
import Form, { StyledFormGroup } from "../../ui/Form";
import { StyledButtonGroup } from "../../ui/ButtonGroup";
import { useState } from "react";
import useLogin from "./useLogin";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();
  const navigate = useNavigate();

  const handleLogin = (e) => {
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
  };

  return (
    <Form
      styleProp={{
        backgroundColor: "#fff",
        display: "grid",
      }}
      onSubmit={handleLogin}
    >
      <StyledFormGroup style={{ alignItems: "end" }}>
        <Form.FormLabel label="Email" styleProp={{ flex: 1 }} />
        <Input
          type="email"
          color="primary"
          autoComplete="email"
          disabled={isLoading}
          size="lg"
          variant="soft"
          sx={{ width: 200 }}
          id="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </StyledFormGroup>

      <StyledFormGroup style={{ alignItems: "end" }}>
        <Form.FormLabel label="password" styleProp={{ flex: 1 }} />
        <Input
          type="password"
          color="primary"
          autoComplete="current-password"
          disabled={isLoading}
          size="lg"
          variant="soft"
          sx={{ width: 200 }}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </StyledFormGroup>

      <StyledButtonGroup>
        <Button
          onClick={() => navigate("/signup")}
          variant="contained"
          sx={{ fontSize: 12 }}
        >
          Sign Up
        </Button>
        <Button type="submit" variant="contained" sx={{ fontSize: 12 }}>
          Login
        </Button>
      </StyledButtonGroup>
    </Form>
  );
}

export default LoginForm;
