// https://api.digitalfortressltd.com/course/v1/courses/
import { apiRequest } from "./api";


export async function getCourse() {
    return apiRequest("course/v1/courses/");
}