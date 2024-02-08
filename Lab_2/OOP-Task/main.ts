import { Student } from "./Student";
import { Teacher } from "./Teacher";

let student1 = new Student("001", "Asraful")
let student2 = new Student("002", "Alam")

let teacher1 = new Teacher("1001", "Al-Amin")
let teacher2 = new Teacher("1002", "Hasibul Hasan")

let Course_awap = teacher1.createCourse("ATP3", "Advance Web Technology", "A", true)
let Course_dotNet = teacher2.createCourse("ATP2", "Advance .NET ", "C", true)

student1.addCourse(Course_awap)
student2.addCourse(Course_dotNet)

teacher1.showDetails()
teacher1.showAllCourses()

teacher2.showDetails()
teacher2.showAllCourses()

student1.showAllCourses()
student2.showAllCourses()