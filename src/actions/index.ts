import { loginUser, registerUser, logout } from "./auth";
import { getCourseByPage } from "./courses/get-courses-by-page";
import { getResourceByPage } from "./courses/get-resources-by-page";
import { getCourseSuggestions } from "./courses/get-course-suggestions";
import { getResourceSuggestions } from "./courses/get-resource-suggestions";
import { getForm } from "./form/form.action";
import { getUserProgress } from "./progress/get-user-progress";
import { updateUserProgress } from "./progress/update-user-progress";

export const server = {
    //auth
    loginUser,
    logout,
    registerUser,
    //courses
    getCourseByPage,
    getCourseSuggestions,
    //resources
    getResourceByPage,
    getResourceSuggestions,
    //form
    getForm,
    //progress
    getUserProgress,
    updateUserProgress,
}