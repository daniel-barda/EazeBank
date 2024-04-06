import { PAGE_SIZE } from "../utils/constants";
import supabase from "./supabase";

// Get the history of the user's movements
export async function getMovementsUser(id, sortBy, filter, page) {
  let query = supabase
    .from("movement_history")
    .select("*", { count: "exact" })
    .eq("user_id", id);

  if (sortBy.field)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "desc",
    });

  if (filter) {
    query = query.eq(filter.field, filter.value);
  }

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data: movements, error, count } = await query;
  if (error) throw new Error(error.message);

  return { movements, count };
}

export async function getUserDetails(id) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("user_id", id)
    .limit(1)
    .single();

  if (error) throw new Error(error.message);

  return data;
}

export async function getAllMovementsUser(id) {
  const { data, error } = await supabase
    .from("movement_history")
    .select("type")
    .eq("user_id", id);

  if (error) throw new Error(error.message);

  return data;
}

export async function depositWithdraw({ user_id, type, details, amount }) {
  // get current balance data FROM users table
  const { data: balanceData } = await supabase
    .from("users")
    .select("current_balance")
    .eq("user_id", user_id)
    .single();

  const { current_balance } = balanceData;

  // Insert the new deposit movement
  const { data, error } = await supabase
    .from("movement_history")
    .insert([
      {
        user_id,
        type,
        details,
        amount: +amount,
      },
    ])
    .select()
    .single();

  if (error) throw new Error(error.message);

  // update current balanceOn the basis of amount value from movement_history table
  const { error: error3 } = await supabase
    .from("users")
    .update({
      current_balance:
        data?.type === "deposit"
          ? current_balance + +data?.amount
          : current_balance - +data?.amount,
    })
    .eq("user_id", user_id);

  if (error3) throw new Error(error3.message);

  return data;
}

export async function transferMoney({ id, amount, recipient_user_id }) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .in("user_id", [id, recipient_user_id]);

  // 1). Make sure the user you want to transfer to actually exists.
  if (!data[1]?.user_id)
    throw new Error(
      "No such bank account, please double check the bank account number you wish to transfer."
    );

  const [currentUser, recipient_user] = data;

  // 2). Make sure our user has enough money in the account.
  if (
    currentUser?.current_balance < 1 ||
    +amount > currentUser?.current_balance
  )
    throw new Error("You don't have enough money in your account! ⛔");

  // 3.) Make sure the user is not trying to make a transfer to their account
  if (currentUser?.user_id === recipient_user?.user_id)
    throw new Error("You cannot transfer to yourself.");

  if (error) throw new Error(error.message);

  // 4). Insert the transfer to the current user for tracking.
  const { error: errorTransfer } = await supabase
    .from("movement_history")
    .insert([
      {
        user_id: currentUser?.user_id,

        type: "transfer",
        details: {
          timestamp: new Date().toISOString(),
          description: `transfer ${amount}$`,
          recipient_user_id,
        },
        amount,
      },
      {
        user_id: recipient_user?.user_id,

        type: "transfer",
        details: {
          timestamp: new Date().toISOString(),
          description: `You got money ${amount}$ from ${currentUser?.user_id}`,
          recipient_user_id: null,
        },
        amount,
      },
    ])
    .select();
  if (errorTransfer) throw new Error(errorTransfer.message);

  // 5).Update the current balance of current user
  const { error: errorUpdateCurrentBalance } = await supabase
    .from("users")
    .update({ current_balance: currentUser.current_balance - Number(amount) })
    .eq("user_id", currentUser.user_id)
    .select();

  if (errorUpdateCurrentBalance) throw new Error(error.message);

  // 6).Update the current balance of  recipient user
  const { error: errorUpdateRecipientBalance } = await supabase
    .from("users")
    .update({ current_balance: currentUser.current_balance + Number(amount) })
    .eq("user_id", recipient_user.user_id)
    .select();

  if (errorUpdateRecipientBalance) throw new Error(error.message);

  return [recipient_user, amount];
}
