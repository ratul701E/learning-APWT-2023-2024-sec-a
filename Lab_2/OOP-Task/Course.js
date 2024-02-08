"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
class Course {
    constructor(courseID, courseName, section, facultyName) {
        this.courseID = courseID;
        this.courseName = courseName;
        this.section = section;
        this.facultyName = facultyName;
        this.registeredStudents = [];
    }
    addStudent(studentName) {
        this.registeredStudents.push(studentName);
    }
    showCourseDetails() {
        console.log("Course ID:", this.courseID);
        console.log("Course Name:", this.courseName);
        console.log("Section:", this.section);
        console.log("Faculty:", this.facultyName);
        for (let registeredStudent of this.registeredStudents) {
            console.log(registeredStudent.getName());
        }
        console.log();
    }
}
exports.Course = Course;
