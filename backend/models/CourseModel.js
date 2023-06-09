const conn = require("../config/dbConnection")
const util = require('util');
const query = util.promisify(conn.query).bind(conn);

class CourseModel {

    async getCourseById(id) {
        const getCourseQuery = `SELECT * FROM courses WHERE id = "${id}"`
        var course = [];
        try {
            const rows = await query(getCourseQuery);
            course = rows
        } catch (err) {
            return 404
        }
        return course[0]
    }

    async getCourseByName(name) {
        const getCourseQuery = `SELECT * FROM courses WHERE name = "${name}"`
        var course = [];
        try {
            const rows = await query(getCourseQuery);
            course = rows
        } catch (err) {
            return 404
        }
        if (course.length == 0) return true
        return false
    }

    async insertCourse(course) {
        const insertCourseQuery = `insert into courses set ?`
        const values = {name: course.name, code: course.code, status: 'in-active',img_url:course.img_url}
        try {
            await query(insertCourseQuery, values);
        } catch (err) {
            return 404
        }
        return 201
    }

    async getAllCourses(isActive=false) {
        let getAllCoursesQuery = `select * from courses`
        if (isActive){
            getAllCoursesQuery += " where status = 'active'"
        }
        var courses = []
        try {
            const rows = await query(getAllCoursesQuery);
            courses = rows
        } catch (err) {
            return 404
        }
        return courses
    }

    async updateCourse(course) {
        const updateCourseQuery = `update courses set ? where ?`
        const values = [{name: course.name, code: course.code}, {id: course.id}]
        try {
            await query(updateCourseQuery, values);
        } catch (err) {
            return false
        }
        return true
    }

    async deleteCourse(id) {
        const deleteCourseQuery = `delete from courses where id = ${id}`
        try {
            await query(deleteCourseQuery);
        } catch (err) {
            return false
        }
        return true
    }

    async getCourse(id) {
        const getCourseQuery = `select * from courses where id = ${id}`
        var courses = []
        try {
            const rows = await query(getCourseQuery);
            courses = rows
        } catch (err) {
            return false
        }
        return courses
    }

    async registerCourse(info) {
        const registerCourseQuery = `insert into student_courses set ?`
        const values = {student_id: info.student_id, course_id: info.course_id}
        try {
            const rows = await query(registerCourseQuery, values);
        } catch (err) {
            return false
        }
        return true
    }

}

module.exports = CourseModel