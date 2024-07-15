import { Restaurant } from "@/lib/models";
import { getUserSession } from "@/lib/session";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    connectToDb();
    const user = await getUserSession();
    if (!user) {
      return NextResponse.redirect("/api/auth/signin?callbackUrl=/myRestaurant");
    }
    console.log("email user:"+ user.email);
    const email = user.email;
    const restaurant = await Restaurant.findOne({ ownerEmail: email });
    return NextResponse.json(restaurant);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch restaurant!");
  }
};
