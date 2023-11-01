import { mysqlconnFn } from '$lib/db/mysql.js';
import { mbtiString } from '../../../../store';


const getRandomCode = ()=>{
    const code = Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    return code;
}

export async function load() {

    let mysqlconn = await mysqlconnFn();
    try {
        let results = await mysqlconn   
        .query("INSERT INTO userInfo (result,identifyCode) VALUES (?,?);",[mbtiString,getRandomCode()])
        .then(([rows])=> {
            console.log(rows);
            return rows;
        });
        return {
            data: results,
        };
    } catch (error) {
        console.error("Got an error!!!");
        console.log(error);
        return error;
    }
}