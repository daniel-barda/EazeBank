import { useMutation, useQueryClient } from "@tanstack/react-query";
import { depositWithdraw } from "../../services/apiMovements";
import { useUser } from "../auth/useUser";
import toast from "react-hot-toast";

function MoneyAction() {
  const { user } = useUser();
  const queryClient = useQueryClient();

  const { mutate: MoneyAction, isLoading } = useMutation({
    mutationFn: ({ amount, action }) =>
      depositWithdraw({
        user_id: user?.id,
        type: action,
        details: {
          timestamp: new Date().toISOString(),
          description: `${action} ${amount}$`,
          recipient_user_id: null,
        },
        amount,
      }),

    onSuccess: (movement) => {
      queryClient.invalidateQueries({ queryKey: ["movements_history"] });
      toast.success(`You ${movement?.details?.description}`);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { MoneyAction, isLoading };
}

export default MoneyAction;
