import { Restaurant } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    connectToDb();
   
    const email = user.email;
    const restaurants = await Restaurant.find();
    return NextResponse.json(restaurants);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch restaurants!");
  }
};
