import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getMovementsUser } from "../../services/apiMovements";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

function useMovements() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const userCurrentId = queryClient.getQueryData(["user"]);
  const { id } = userCurrentId;

  // SORT
  const sortByRaw = searchParams.get("sortBy") || "created_at-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // FILTER
  const filterValue = searchParams.get("type");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "type", value: filterValue };

  // PAGENATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data = {}, isLoading } = useQuery({
    queryKey: ["movements_history", sortBy, filter, page],
    queryFn: () => getMovementsUser(id, sortBy, filter, page),
  });

  // PRE FETCHING
  const pageCount = Math.ceil(data.count / PAGE_SIZE);

  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["movements_history", sortBy, filterValue, page + 1],
      queryFn: () => getMovementsUser(id, sortBy, filter, page + 1),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["movements_history", sortBy, filterValue, page - 1],
      queryFn: () => getMovementsUser(id, sortBy, filter, page - 1),
    });
  }

  return { data, isLoading };
}

export default useMovements;
