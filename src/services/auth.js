import { apiRequest } from "./api";

// Register User
export async function registerUser(credentials) {
    return apiRequest("user/v1/register/", { method: "POST", body: JSON.stringify(credentials) }, false);
}

// Login User
export async function loginUser(credentials) {
    return apiRequest("user/login/", { method: "POST", body: JSON.stringify(credentials) }, false);
}