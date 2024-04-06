import { useMutation, useQueryClient } from "@tanstack/react-query";
import { transferMoney } from "../../services/apiMovements";
import toast from "react-hot-toast";

function useTransfer() {
  const queryClient = useQueryClient();
  const userCurrentId = queryClient.getQueryData(["user"]);
  const { id } = userCurrentId;

  const { mutate: data, isLoading } = useMutation({
    mutationFn: ({ amount, recipient_user_id }) =>
      transferMoney({ id, amount, recipient_user_id }),
    onSuccess: (data) => {
      const [recipient_user, amount] = data;
      queryClient.invalidateQueries(["movements_history"]);

      toast.success(
        `You made a transfer to bank account ${recipient_user?.user_id} in the amount of ${amount}`,
        { duration: 6000 }
      );
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { data, isLoading };
}

export default useTransfer;
