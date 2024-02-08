import { Course } from "./Course";

export class Teacher {
    private ID: string
    private name: string
    private courses: Course[]

    constructor(ID: string, name: string){
        this.ID = ID
        this.name = name
        this.courses = []
    }

    createCourse(courseID: string, courseName: string, section: string, addToList?: boolean): Course{
        let course = new Course(courseID, courseName, section, this.name)
        if(addToList) this.courses.push(course)
        return course
    }

    showAllCourses(): void {
        for(let course of this.courses){
            course.showCourseDetails()
            console.log()
        }
    }

    showDetails(): void {
        console.log("ID: ", this.ID)
        console.log("Name: ", this.name)
        console.log()
    }


}