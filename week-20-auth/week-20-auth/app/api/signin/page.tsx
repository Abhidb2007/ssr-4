import jwt from 'jsonwebtoken';
import {NextRequest,NextResponse} from "next/server";
export async function POST(req:NextRequest){
    //install we should check the username and password in DB and only if it is right 
    // we should return the jwt
    const body=await req.json();
    const username=body.username;
    const password=body.password;
    const userId=1;
    const token=jwt.sign({
        userId

    },"SECRET");
    return NextResponse.json({
        token
    })

}
app.POST("/signin",(req,res)=>{
    const body=req.body;
    const username=body.username;
    const password=body.password;
    
    const token=jwt.sign({
        userId
},"SECRET");
    res.json({
        token
    })
})