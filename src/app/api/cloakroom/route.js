import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(request) {
  const prisma = new PrismaClient();

  try {
    const body = await request.json();
    const { name, phone, token, email, adminEmail } = body;
    const auth_token = request.headers.get("Authorization");

    if (!auth_token) {
      return NextResponse.json({ message: "Authorization header is missing" }, { status: 401 });
    }

    const auth_token_parts = auth_token.split(" ");

    if (
      auth_token_parts.length !== 2 ||
      auth_token_parts[0] !== "Bearer" ||
      auth_token_parts[1] !== process.env.NEXT_API_TOKEN
    ) {
      return NextResponse.json({ message: "Invalid Authorization header format" }, { status: 401 });
    }

    const is_admin = await prisma.users.findUnique({
      where: { email: adminEmail },
    });

    if (!is_admin) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    if (!name || !phone || !token || !email) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    // Step 1: Find the room with the most available lockers
    const leastOccupiedRoom = await prisma.availableCloakRoom.groupBy({
      by: ["room"],
      _count: { id: true },
      where: { available: true },
      orderBy: { _count: { id: "desc" } }, // Sort by highest available lockers
      take: 1,
    });

    if (!leastOccupiedRoom.length) {
      return NextResponse.json({ message: "No available lockers" }, { status: 400 });
    }

    const assignedRoom = leastOccupiedRoom[0].room;

    // Step 2: Find the lowest available locker in that room
    const availableLocker = await prisma.availableCloakRoom.findFirst({
      where: { room: assignedRoom, available: true },
      orderBy: { locker: "asc" }, // Get the smallest available locker number
    });

    if (!availableLocker) {
      return NextResponse.json({ message: "No available lockers in this room" }, { status: 400 });
    }

    // Step 3: Mark the locker as occupied
    await prisma.availableCloakRoom.update({
      where: { id: availableLocker.id },
      data: { available: false },
    });

    // Step 4: Save the user details along with assigned room & locker
    const newEntry = await prisma.cloakRoom.create({
      data: {
        email,
        phno: phone,
        name,
        token,
        room: assignedRoom,
        locker: availableLocker.locker,
      },
    });

    return NextResponse.json(
      { message: "Cloak room details saved", data: newEntry },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving cloak room details:", error);
    return NextResponse.json({ message: "Error saving cloak room details" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
