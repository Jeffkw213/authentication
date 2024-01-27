// Public method and everyone can get access to this api

import { NextResponse } from "next/server"
import Account from "@/model/account"
import connectMongoDB from "@/libs/mongodb"

export async function GET() {
    // await new Promise(resolve => setTimeout(resolve, 2000));
    await connectMongoDB()
    const accounts = await Account.find()
    return NextResponse.json({ accounts })
}

export async function POST(req: any) {
    const { first, last, email, password } = await req.json()
    await connectMongoDB()
    await Account.create({
        first,
        last,
        email,
        password
    })
    return NextResponse
}

