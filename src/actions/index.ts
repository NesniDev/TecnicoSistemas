import { loginUser, registerUser, logout, loginWithGoogle } from "./auth";
import { getCourseByPage } from "./courses/get-courses-by-page";
import { getRecurseByPage } from "./courses/get-recurses-by-page";

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
    getRecurseByPage,
    
}