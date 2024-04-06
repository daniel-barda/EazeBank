import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success("The user has been updated");
      queryClient.setQueryData(["user"], user);
    },
    onError: (error) => {
      toast.error(`Someting went wrong ${error.message}`);
    },
  });

  return { updateUser, isUpdating };
}

export default useUpdateUser;
