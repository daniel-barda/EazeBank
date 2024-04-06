import supabase from "./supabase";

export async function getCustomers() {
  const { data, error } = await supabase.from("customers").select("*");
  if (error) throw new Error(error);

  return data;
}
