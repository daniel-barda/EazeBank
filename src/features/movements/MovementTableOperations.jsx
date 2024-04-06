import Row from "../../ui/Row";
import SortBy from "../../ui/SortBy";
import MovementMenu from "../../ui/MovementMenu";
import Filter from "../../ui/Filter";

function MovementTableOperations() {
  return (
    <Row type="horizontal">
      <SortBy
        options={[
          { value: "created_at-desc", label: "Sort by date (recent first)" },
          { value: "created_at-asc", label: "Sort by date (earlier first)" },
          {
            value: "amount-desc",
            label: "Sort by amount (high first)",
          },
          { value: "amount-asc", label: "Sort by amount (low first)" },
        ]}
      />

      <Filter
        options={[
          { value: "all", label: "All" },
          { value: "deposit", label: "Deposit" },
          { value: "withdrawal", label: "Withdrawal" },
          { value: "transfer", label: "Transfer" },
        ]}
      />
      <MovementMenu />
    </Row>
  );
}

export default MovementTableOperations;
