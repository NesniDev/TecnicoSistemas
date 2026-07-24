import { loginUser, registerUser, logout, loginWithGoogle } from "./auth";
import { getCourseByPage } from "./courses/get-courses-by-page";
import { getResourceByPage } from "./courses/get-resources-by-page";
import { getForm } from "./form/form.action";
import { getUserProgress } from "./progress/get-user-progress";
import { updateUserProgress } from "./progress/update-user-progress";

export const server = {
    //action


    //login
    loginUser,
    //logout
    logout,
    //auth
    registerUser,
    //google
    loginWithGoogle,
    //courses
    getCourseByPage,
    //recurses
    getResourceByPage,
    //form
    getForm,
    //progress
    getUserProgress,
    updateUserProgress,
    
}