import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserDetails } from "../../services/apiMovements";

export function useGetUserDetails() {
  const queryClient = useQueryClient();
  const userCurrentId = queryClient.getQueryData(["user"]);
  const { id } = userCurrentId;

  const { isLoading, data: user } = useQuery({
    queryKey: ["user_details"],
    queryFn: () => getUserDetails(id),
  });

  return { user, isLoading };
}
