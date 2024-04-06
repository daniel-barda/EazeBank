import { useMutation } from "@tanstack/react-query";
import { signup as signupAPI } from "../../services/apiAuth";

function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({ fullName, email, password }) =>
      signupAPI({ fullName, email, password }),
  });

  return { signup, isLoading };
}

export default useSignup;
