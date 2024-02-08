"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    constructor(ID, name) {
        this.ID = ID;
        this.name = name;
        this.courses = [];
    }
    addCourse(course) {
        this.courses.push(course);
    }
    showAllCourses() {
        for (let course of this.courses) {
            course.showCourseDetails();
        }
    }
    getName() {
        return this.name;
    }
}
exports.Student = Student;
