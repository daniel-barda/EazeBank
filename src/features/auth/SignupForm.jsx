import { useState } from "react";
import { Button, Input } from "@mui/material";

import Form, { StyledFormGroup } from "../../ui/Form";
import { StyledButtonGroup } from "../../ui/ButtonGroup";
import { useNavigate } from "react-router-dom";
import useSignup from "./useSignup";
import toast from "react-hot-toast";

function SignupForm() {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { signup, isLoading } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !email || !password) return;

    signup(
      { fullName, email, password },
      {
        onSuccess: () => {
          toast.success(`Welcome ${fullName}`);
          navigate("/dashboard");
        },
        onError: (error) => {
          toast.error(`Someting went wrong ${error.message}`);
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
      onSubmit={handleSubmit}
    >
      <StyledFormGroup style={{ alignItems: "end" }}>
        <Form.FormLabel label="FullName" styleProp={{ flex: 1 }} />
        <Input
          color="primary"
          autoComplete="nickname"
          disabled={isLoading}
          size="lg"
          variant="soft"
          sx={{ width: 200 }}
          id="FullName"
          value={fullName}
          onChange={(e) => setFullname(e.target.value)}
        />
      </StyledFormGroup>

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
        <Form.FormLabel label="password" />
        <Input
          type="password"
          autoComplete="new-password"
          color="primary"
          disabled={isLoading}
          size="lg"
          variant="soft"
          sx={{ width: 200 }}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </StyledFormGroup>

      <StyledButtonGroup style={{ justifyContent: "center" }}>
        <Button
          type="reset"
          disabled={isLoading}
          variant="contained"
          sx={{ fontSize: 12 }}
        >
          Reset
        </Button>
        <Button
          disabled={isLoading}
          type="submit"
          variant="contained"
          sx={{ fontSize: 12 }}
        >
          {!isLoading ? "SignUp" : "Loading..."}
        </Button>
      </StyledButtonGroup>

      <Button
        variant="contained"
        sx={{ fontSize: 12 }}
        onClick={() => navigate("/login")}
      >
        Go Login Page
      </Button>
    </Form>
  );
}

export default SignupForm;
