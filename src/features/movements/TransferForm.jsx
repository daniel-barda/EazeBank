import { Button } from "@mui/joy";
import { Input } from "@mui/material";
import Form, { StyledFormGroup } from "../../ui/Form";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "../../ui/ErrorMessage";
import { useState } from "react";
import useTransfer from "./useTransfer";

function TransferForm({ onClose, action }) {
  const [isConfirmTransfer, setIsConfirmTransfer] = useState(false);
  const { data, isLoading } = useTransfer();

  const onSubmit = ({ amount, recipient_user_id }) => {
    if (!amount) return;
    onClose?.();
    reset();
    data({ amount, recipient_user_id });
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      styleProp={{
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr auto",
        justifyContent: "center",
      }}
    >
      <StyledFormGroup type="grid">
        <Form.FormLabel label="Transfer amount" />
        <Input
          color="primary"
          size="lg"
          variant="soft"
          sx={{ width: 250 }}
          id="Transfer amount"
          disabled={isLoading}
          {...register("amount", {
            required: "You must fill in the field.",
            validate: (value) => !isNaN(value) || "You must type digits",
          })}
        />

        {errors.amount && <ErrorMessage>{errors.amount.message}</ErrorMessage>}
      </StyledFormGroup>

      <StyledFormGroup type="grid">
        <Form.FormLabel label="to account" />
        <Input
          color="primary"
          size="lg"
          variant="soft"
          sx={{ width: 250 }}
          id="to account"
          disabled={isLoading}
          {...register("recipient_user_id", {
            required: "You must fill in the field.",
          })}
        />

        {errors.recipient_user_id && (
          <ErrorMessage>{errors.recipient_user_id.message}</ErrorMessage>
        )}
      </StyledFormGroup>

      <StyledFormGroup>
        <input
          type="checkbox"
          id="approval"
          onChange={() => setIsConfirmTransfer((confirm) => !confirm)}
          checked={isConfirmTransfer}
        />

        <label htmlFor="approval">
          I confirm the transfer amount to the specified account.
        </label>
      </StyledFormGroup>

      <Button
        disabled={isLoading || !isConfirmTransfer}
        type="submit"
        size="lg"
        sx={{
          height: 40,
        }}
      >
        Make a transfer
      </Button>
    </Form>
  );
}

export default TransferForm;
