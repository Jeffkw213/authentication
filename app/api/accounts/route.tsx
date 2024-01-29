// Public method and everyone can get access to this api

import { NextResponse } from "next/server"
import Account from "@/libs/account"
import connectMongoDB from "@/libs/mongodb"
/**
 * @param req :searching for the user name 
 * @returns NextResponse.json
 */
export async function findAccount(req: any) {
    // await new Promise(resolve => setTimeout(resolve, 2000));
    const { username } = await req.json()
    await connectMongoDB()
    const accounts = await Account.findOne({ username })
    return NextResponse.json({ accounts }, { status: 200 })
}
/**
 * 
 * @param req 
 * @returns NextResponse.json
 */

export async function addAccount(req: any) {
    const { first, last, email, password, username } = await req.json()
    await connectMongoDB()
    await Account.create({
        username,
        first,
        last,
        email,
        password
    })
    return NextResponse.json({ message: "account Created" }, { status: 201 })
}

