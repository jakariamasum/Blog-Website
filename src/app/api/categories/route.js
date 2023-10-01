import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  console.log('trying..............')
  try {
    const categories = await prisma.category.findMany();

    return new NextResponse(JSON.stringify(categories, { status: 200 }));
  } catch (err) {
    console.log(err.message);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};