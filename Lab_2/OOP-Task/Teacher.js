"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
const Course_1 = require("./Course");
class Teacher {
    constructor(ID, name) {
        this.ID = ID;
        this.name = name;
        this.courses = [];
    }
    createCourse(courseID, courseName, section, addToList) {
        let course = new Course_1.Course(courseID, courseName, section, this.name);
        if (addToList)
            this.courses.push(course);
        return course;
    }
    showAllCourses() {
        for (let course of this.courses) {
            course.showCourseDetails();
            console.log();
        }
    }
    showDetails() {
        console.log("ID: ", this.ID);
        console.log("Name: ", this.name);
        console.log();
    }
}
exports.Teacher = Teacher;
