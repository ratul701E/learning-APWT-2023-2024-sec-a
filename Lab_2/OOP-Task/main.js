"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = require("./Student");
const Teacher_1 = require("./Teacher");
let student1 = new Student_1.Student("001", "Asraful");
let student2 = new Student_1.Student("002", "Alam");
let teacher1 = new Teacher_1.Teacher("1001", "Al-Amin");
let teacher2 = new Teacher_1.Teacher("1002", "Hasibul Hasan");
let Course_awap = teacher1.createCourse("ATP3", "Advance Web Technology", "A", true);
let Course_dotNet = teacher2.createCourse("ATP2", "Advance .NET ", "C", true);
student1.addCourse(Course_awap);
student2.addCourse(Course_dotNet);
teacher1.showDetails();
teacher1.showAllCourses();
teacher2.showDetails();
teacher2.showAllCourses();
student1.showAllCourses();
student2.showAllCourses();
