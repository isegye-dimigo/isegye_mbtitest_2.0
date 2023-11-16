//@ts-nocheck
import { mysqlconnFn } from "$lib/db/mysql";

export async function POST({request}){
    const test = (await request.json())['code'];
    const mysqlconn = await mysqlconnFn();
    let mbtiString:string;
    try {
        let results = await mysqlconn
        .query("SELECT result FROM userInfo WHERE identifyCode = ?",[test])
        .then(([rows])=> {
            console.log(rows[0].result);
            mbtiString = rows[0].result;
            return mbtiString;
        });
        return new Response(JSON.stringify({
            mbti: mbtiString,
        }));
    } catch (error) {
        console.log("Got an error!!!");
        console.error(error);
        return new Response(error.toString());
    }
}