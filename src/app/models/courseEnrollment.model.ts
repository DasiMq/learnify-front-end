import { Course } from "./course.model";
import { Enrollment } from "./enrollment.model";

export interface CourseEnrollment extends Course, Enrollment {
    courseProgress: string;
    courseDescription: string;
    completionStatus: string;
    date: Date;
    progressEnrollmentId: number;
    progressCourseId: number;
}