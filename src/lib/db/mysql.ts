import mysql from 'mysql2/promise';
import dotenv from 'dotenv'
dotenv.config();

let mysqlconn;

export const mysqlconnFn = () => {
    mysqlconn = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PW,
        database: process.env.DB
    });
    return mysqlconn;
}