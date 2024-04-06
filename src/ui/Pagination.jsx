import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";

export default function PaginationOutlined({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  const handlePageChange = (event, value) => {
    searchParams.set("page", value);
    setSearchParams(searchParams);
  };

  return (
    <Stack sx={{ marginTop: 2 }} spacing={2}>
      <Pagination
        count={pageCount}
        page={currentPage}
        onChange={handlePageChange}
      />
    </Stack>
  );
}
