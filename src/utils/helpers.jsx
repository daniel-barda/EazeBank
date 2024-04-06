import { format } from "date-fns";

export const formattedDate = (date) => format(date, "EEEE, MMMM dd, yyyy");

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value
  );
