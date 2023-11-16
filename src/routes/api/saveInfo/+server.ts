// @ts-nocheck
import { mysqlconnFn } from "$lib/db/mysql";

const getRandomCode = () =>{
    const code = Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6,'0');
    return code;
}
export async function POST({request}){
    const mbtiString = (await request.json())['mbti'];
    const randomCode = getRandomCode();
    const mysqlconn = await mysqlconnFn();
    try {
        let results = await mysqlconn
        .query("INSERT INTO userInfo (result,identifyCode) VALUES (?,?);",[mbtiString,randomCode])
        .then(([rows])=> {
            console.log(rows);
            return rows;
        });
        return new Response(JSON.stringify({
            code: randomCode,
        }));
    } catch (error) {
        console.log("Got an error!!!");
        console.error(error);
        return new Response(error.toString());
    }
}