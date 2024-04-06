import { Button } from "@mui/joy";
import { Input } from "@mui/material";
import Form, { StyledFormGroup } from "../../ui/Form";
import useMoneyAction from "./useMoneyAction";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "../../ui/ErrorMessage";

function WithdrawalForm({ onClose, action }) {
  const { MoneyAction, isLoading } = useMoneyAction();

  const onSubmit = ({ amount }) => {
    if (!amount) return;
    onClose?.();
    reset();
    MoneyAction({ amount, action });
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <StyledFormGroup>
        <Form.FormLabel label="Withdraw" />

        <Input
          color="primary"
          size="lg"
          variant="soft"
          sx={{ width: 250 }}
          id="Withdraw"
          disabled={isLoading}
          {...register("amount", {
            required: "You must fill in the field.",
            validate: (value) => !isNaN(value) || "You must type digits",
          })}
        />
        {errors.amount && <ErrorMessage>{errors.amount.message}</ErrorMessage>}
      </StyledFormGroup>

      <Button disabled={isLoading} type="submit" size="lg" sx={{ height: 35 }}>
        To withdraw money
      </Button>
    </Form>
  );
}

export default WithdrawalForm;
