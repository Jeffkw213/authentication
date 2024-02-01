import { NextResponse } from "next/server"
import Account from "@/libs/account"
import connectMongoDB from "@/libs/mongodb"

export async function GET(req: any, { params:{ id }  } : any) {
    await connectMongoDB()
    const accounts = await Account.findOne({ _id: id })
    console.log(req)
    return NextResponse.json({ accounts }, { status: 200 })
}