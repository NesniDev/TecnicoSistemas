/// <reference path="../.astro/actions.d.ts" />
///    <reference types="astro/client" />


declare namespace App {
    interface Locals {
        isLoggedIn: boolean,
        user: any,
        email: string,
        displayName: string,
        photoURL: string,
        emailVerified: boolean,
    }
}