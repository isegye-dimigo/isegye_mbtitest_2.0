//@ts-nocheck
import { mysqlconnFn } from "$lib/db/mysql";

export async function POST({ request }) {
    let mysqlconn = await mysqlconnFn();
    try{
        const result = await mysqlconn
        .query("SELECT COUNT(*) as count FROM userInfo;")
        return new Response (JSON.stringify({
            count: result[0][0]['count'],
        }));
    }catch(error){
        return new Response(error.toString());
    }
}