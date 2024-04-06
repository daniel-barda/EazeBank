import MovementTableOperations from "../features/movements/MovementTableOperations";
import MovmentDetails from "../features/movements/MovmentDetails";
import { StyledHeading } from "../ui/Heading";

function Movements() {
  return (
    <>
      <StyledHeading>Movements</StyledHeading>
      <MovementTableOperations />
      <MovmentDetails />
    </>
  );
}

export default Movements;
