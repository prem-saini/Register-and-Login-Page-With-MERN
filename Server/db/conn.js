// const mongoose = require("mongoose")


// const DB = "mongodb+srv://prem7721:premsaini@cluster0.y4ks5mi.mongodb.net/RegisterPage?retryWrites=true&w=majority";


// mongoose.connect(DB, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// }).then(() => console.log("database is connect")).catch((err) => console.log("error" + err.message))


const mongoose = require("mongoose")



const DB = "mongodb+srv://prem7721:premsaini@cluster0.y4ks5mi.mongodb.net/RegisterPage?retryWrites=true&w=majority";

// const conn = mysql.createConnection({
//     user: 'root',
//     host: 'localhost',
//     password: 'premsaini',
//     database: 'userimguploader'
// });

// conn.connect((error) => {
//     if (error) throw error;
//     console.log("Prem saini")
// });

mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log("DATABASE connected")).catch((err) => console.log("error" + err.message))

