import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(request) {
  const prisma = new PrismaClient();

  try {
    const body = await request.json();
    const { name, phone, bags, token, email } = body;

    if (!name || !phone || !bags || !token || !email) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 },
      );
    }

    const newEntry = await prisma.cloakRoom.create({
      data: {
        email,
        phno: phone,
        name,
        noOfBags: parseInt(bags, 10),
        token,
      },
    });

    return NextResponse.json(
      { message: "Cloak room details saved", data: newEntry },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error saving cloak room details:", error);
    return NextResponse.json(
      { message: "Error saving cloak room details" },
      { status: 500 },
    );
  } finally {
    await prisma.$disconnect();
  }
}
