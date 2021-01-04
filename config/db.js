// const mongoose = require('mongoose');

// const connectDB = async() => {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useFindAndModify: false,
//         useUnifiedTopology: true
//     });
//     console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold);
// }

// module.exports = connectDB;

//const Pool = require("pg").Pool;
const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "rahul2107",
    host: "localhost",
    port: 5432,
    database: "assignment"
})

module.exports = pool;