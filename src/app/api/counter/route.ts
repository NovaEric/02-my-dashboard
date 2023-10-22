import { NextResponse } from "next/server";


export async function GET(request: Request) {
    
    return NextResponse.json({
        method: "Get",
        count: 100
    })
}
export async function POST(request: Request) {
    
    return NextResponse.json({
        method: "Post",
        count: 100
    })
}