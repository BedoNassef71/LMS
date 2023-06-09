const express = require("express")
const dotenv = require("dotenv").config()
const cors = require("cors")

const app = express()
const port = process.env.PORT || 5001
app.use(express.json())
app.use(cors())

app.use("/api/images", express.static('./uploads'))

var ValidateToken = require("./middleware/ValidateToken")
const validateToken = new ValidateToken();

app.use("/api", require("./routes/userRouter"))
app.use("/api/admin", validateToken.validateAdminToken, require("./routes/adminRouter"))
app.use("/api/students", validateToken.validateStudentToken, require("./routes/studentRouter"))
app.use("/api/instructors", validateToken.validateInstructorToken, require("./routes/instructorRouter"))
app.use("/api/courses", require("./routes/coursesRouter"))

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})