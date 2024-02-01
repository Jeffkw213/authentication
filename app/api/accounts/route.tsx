// Public method and everyone can get access to this api

import { NextRequest, NextResponse } from "next/server"
import Account from "@/libs/account"
import connectMongoDB from "@/libs/mongodb"
/**
 * @param req :searching for the user name 
 * @returns NextResponse.json
 * 
 * URL Params use of Error handling
 */ 
export async function GET(req: NextRequest) {
    // await new Promise(resolve => setTimeout(resolve, 2000));
    // console.log(req)
    const searchParams = req.nextUrl.searchParams
    const username = searchParams.get('username') 
    if (!username){
        return NextResponse.json({ error: 'Bad Request' }, { status: 400 })
    }
    console.log(username)
    await connectMongoDB()
    const account = await Account.findOne({ username })
    if (!account) {return NextResponse.json({ error: 'User Not Found' }, { status: 404 })}
    return NextResponse.json({ account }, { status: 200 })
}
/**
 * 
 * @param req 
 * @returns NextResponse.json
 */

export async function POST(req: Request) {
    const { username, first, last, email, password  } = await req.json()
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

