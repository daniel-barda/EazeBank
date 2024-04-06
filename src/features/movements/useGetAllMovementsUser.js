import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllMovementsUser } from "../../services/apiMovements";

function useLastMovmentsUser() {
  const queryClient = useQueryClient();
  const userCurrentId = queryClient.getQueryData(["user"]);
  const { id } = userCurrentId;

  const { data, isLoading } = useQuery({
    queryKey: ["movement_last"],
    queryFn: () => getAllMovementsUser(id),
  });
  return { isLoading, data };
}

export default useLastMovmentsUser;
