import { Course } from "./Course";

export class Student {
    private ID: string
    private name: string
    private courses: Course[]

    constructor(ID: string, name: string){
        this.ID = ID
        this.name = name
        this.courses = []
    }

    addCourse(course: Course): void {
        this.courses.push(course)
    }

    showAllCourses(): void {
        for(let course of this.courses){
            course.showCourseDetails()
        }
    }

    getName(): string {
        return this.name
    }
}