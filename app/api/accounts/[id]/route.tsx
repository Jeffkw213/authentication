import { NextResponse } from "next/server"
import Account from "@/model/account"
import connectMongoDB from "@/libs/mongodb"

export async function GET({params}:any) {
    const {id} = params
    await connectMongoDB()
    const accounts = await Account.findOne({_id:id})
    return NextResponse.json({ accounts }, { status: 200 })
}