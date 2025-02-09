'use server';

import { extractDataFromToken } from "@/lib/jwttoken";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req) {
    const prisma = new PrismaClient();
    try {
        const auth_token = req.headers.get("Authorization");
        const data_token = req.headers.get("Token");

        if (!auth_token) {
            return new NextResponse(JSON.stringify({ message: "Authorization header is missing" }), {
                status: 401,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }

        const auth_token_parts = auth_token.split(' ');

        if (auth_token_parts.length !== 2 || auth_token_parts[0] !== "Bearer" || !auth_token_parts[1] || auth_token_parts[1] !== process.env.NEXT_API_TOKEN) {
            return new NextResponse(JSON.stringify({ message: "Invalid Authorization header format" }), {
                status: 401,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }

        const data_token_content = extractDataFromToken(data_token);

        const data = await prisma.registration.findUnique({
            where: {
                receiptId: data_token_content.scannedData.receiptId,
            },
        });

        if (data.scanned === true) {
            return new NextResponse(JSON.stringify({ message: "Already Verified" }), {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }

        await prisma.scanHistory.create({
            data:{
                invoiceId: data_token_content.scannedData.invoiceId,
                adminEmail: data_token_content.adminEmail,
                userEmail: data_token_content.scannedData.email,
            }
        })

        await prisma.registration.update({
            where: {
                receiptId: data_token_content.scannedData.receiptId,
            },
            data: {
                scanned: true,
            },
        });

        return new NextResponse(JSON.stringify({ message: "Verified Successfully", data }), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });

    } catch (error) {
        console.error("Error fetching data:", error);
        return new NextResponse(JSON.stringify({ message: "Error fetching data" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } finally {
        await prisma.$disconnect();
    }
}
