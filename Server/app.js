const express = require("express")
const app = express();
require("./db/conn")
const router = require('./routes/router')
const cors = require('cors')
const cookiParser = require("cookie-parser")
const port = 4002;


app.use(express.json());
app.use(cors());
app.use(cookiParser())
app.use(router)



app.listen(port, () => {
    console.log("server Start")
})
