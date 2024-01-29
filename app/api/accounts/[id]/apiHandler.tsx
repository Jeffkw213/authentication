import { NextResponse } from "next/server"
import Account from "@/libs/account"
import connectMongoDB from "@/libs/mongodb"

export async function findId(req: any, { params }: any) {
    const { id } = params
    await connectMongoDB()
    const accounts = await Account.findOne({ _id: id })
    console.log(req)
    return NextResponse.json({ accounts }, { status: 200 })
}