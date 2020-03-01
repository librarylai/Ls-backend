require('dotenv').config()

export default {
  mysql: {
    host: process.env.HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
  },
  secret: process.env.SECRET
}