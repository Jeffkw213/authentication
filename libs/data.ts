import Account from "./account";
// Add noStore() here prevent the response from being cached.
import { unstable_noStore as noStore } from "next/cache";
import connectMongoDB from "@/libs/mongodb";

export async function fetchAccount() {
  connectMongoDB();
  noStore();
  try {
    const data = await Account.findOne();
    return data;
  } catch (error) {
    console.log("Database error: ", error);
    throw new Error("Failed to fetch data");
  }
}
