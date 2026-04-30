import db from "mysql2"
import env from "dotenv"

env.config()

export const pool = db.createPool({
    host: process.env.DB_HOST as string,
    user: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_NAME as string
}).promise()