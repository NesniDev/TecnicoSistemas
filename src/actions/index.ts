import { loginUser, registerUser, logout, loginWithGoogle } from "./auth";
import { getCourseByPage } from "./courses/get-courses-by-page";
import { getResourceByPage } from "./courses/get-resources-by-page";

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
    
}