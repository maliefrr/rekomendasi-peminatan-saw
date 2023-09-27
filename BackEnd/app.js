const express = require("express")
require("dotenv").config()
require("./models/index")

const app = express()


app.use("/", require("./routes/mainRouter"))
app.use("/register", require("./routes/registerRouter"))

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`The app is running on port ${port}`))