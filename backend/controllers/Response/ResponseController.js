const {response} = require("express");
const DatabaseError = (response) => {
    response.status(502).json({msg: "Database Error Occurs"})
}

const WrongEmail = (response) => {
    response.status(401).json({msg: "Wrong Email"})
}

const WrongPassword = (response) => {
    response.status(401).json({msg: "Wrong Password"})
}

const emailAlreadyExist = (response) => {
    response.status(409).json({msg: "Email Already Exist"})
}

const loginSuccessfully = (response, token,user) => {
    delete user.password
    response.cookie("access_token", token, {httpOnly: true}).status(200).json({
        msg: "Logged in Successfully",
        token: token,
        user:user
    })
}

const requiredFiled = (response) => {
    response.status(500).json({msg: "Required Filed not Found"})
}

const emailCreatedSuccessfully = (response) => {
    response.status(201).json({msg: "Email Created Successfully"})
}

const tokenError = (response) => {
    response.status(498).json({msg: "Invalid Token"})
}

const passwordChanged = (response) => {
    response.status(202).json({msg: "Password Changed"})
}

const userInfo = (response, info) => {
    const {id, email, phone, status, type} = info
    legalInfo = {id: id, email: email, phone: phone, status: status, type: type}
    response.status(200).json({msg: "User Info", info: legalInfo})
}

const Unauthorized = (response) => {
    response.status(401).json({msg: "Unauthorized User"})
}

const CourseAlreadyExist = (response) => {
    response.status(409).json({msg: "Course Already Exist"})
}

const CourseCreatedSuccessfully = (response) => {
    response.status(201).json({msg: "Course Created Successfully"})
}

const CoursesList = (response, courses) => {
    if (courses.length == 0) courses = []
    try {
        for (let i = 0, len = courses.length; i < len; i++) {
            delete courses[i].course_id;
        }
    } catch (e) {
    }
    response.status(200).json({msg: "Courses List", courses: courses})
}

const CourseUpdated = (response) => {
    response.status(202).json({msg: "Courses Updated"})
}

const CourseDeleted = (response) => {
    response.status(202).json({msg: "Courses Deleted"})
}

const InstructorsList = (response, instructors) => {
    if (instructors.length == 0) instructors = []
    for (var i = 0, len = instructors.length; i < len; i++) {
        delete instructors[i].password;
    }
    response.status(200).json({msg: "Instructors List", instructors: instructors})
}

const InstructorDeleted = (response) => {
    response.status(202).json({msg: "Instructor Deleted"})
}

const InstructorUpdated = (response) => {
    response.status(202).json({msg: "Instructor Updated"})
}

const StudentInfo = (response, student) => {
    if (student.length == 0) student = []
    delete student.password;
    response.status(200).json({msg: "Student Info", student: student})
}

const CourseRegistered = (response) => {
    response.status(202).json({msg: "Course Registered Successfully"})
}

const InstructorAssingedToCourse = (response) => {
    response.status(202).json({msg: "Instructor Assinged To Course Successfully"})
}

const StudentsList = (response, students) => {
    response.status(200).json({msg: "Students List", students: students})
}

const StudentGradeUpdated = (response)=>{
    response.status(200).json({msg: "Students Grade Updated"})
}

module.exports = {
    DatabaseError,
    WrongEmail,
    WrongPassword,
    loginSuccessfully,
    requiredFiled,
    emailAlreadyExist,
    emailCreatedSuccessfully,
    tokenError,
    passwordChanged,
    userInfo,
    Unauthorized,
    CourseAlreadyExist,
    CourseCreatedSuccessfully,
    CoursesList,
    CourseUpdated,
    CourseDeleted,
    InstructorsList,
    InstructorDeleted,
    InstructorUpdated,
    StudentInfo,
    CourseRegistered,
    InstructorAssingedToCourse,
    StudentsList,
    StudentGradeUpdated
}