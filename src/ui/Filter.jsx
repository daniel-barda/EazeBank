import { Button, ButtonGroup } from "@mui/material";
import { useSearchParams } from "react-router-dom";

function Filter({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get("type") || options.at(0).value;

  const handleClick = (value) => {
    searchParams.set("type", value);
    setSearchParams(searchParams);
  };

  return (
    <ButtonGroup
      variant="contained"
      aria-label="button groupButtons to filter actions"
      sx={{ flex: 1, boxShadow: 0 }}
    >
      {options.map((option) => {
        return (
          <Button
            sx={{
              fontSize: 12,
            }}
            key={option.value}
            onClick={() => handleClick(option.value)}
          >
            {option.label}
          </Button>
        );
      })}
    </ButtonGroup>
  );
}

export default Filter;
