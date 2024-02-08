import { Student } from './Student'

export class Course{
    private courseID: string
    private courseName: string
    private facultyName: string
    private section: string
    private registeredStudents : Student[]

    constructor(courseID:string, courseName:string, section: string, facultyName: string){
        this.courseID = courseID
        this.courseName = courseName
        this.section = section
        this.facultyName = facultyName
        this.registeredStudents = []
    }

    addStudent(studentName: Student) : void {
        this.registeredStudents.push(studentName)
    }

    showCourseDetails() : void {
        console.log("Course ID:", this.courseID)
        console.log("Course Name:", this.courseName)
        console.log("Section:", this.section)
        console.log("Faculty:", this.facultyName)
        for(let registeredStudent of this.registeredStudents){
            console.log(registeredStudent.getName())
        }
        console.log()
    }

}