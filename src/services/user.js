import { apiRequest } from "./api";

// Get All Users
export async function getAllUsers() {
    return apiRequest("user/v1/users/", { method: "GET" });
}

// Get a Specific User by ID
export async function getUserProfile(userId = localStorage.getItem("userId")) {
    if (!userId) throw new Error("User ID is missing");
    return apiRequest(`user/${userId}/`, { method: "GET" });
}

// Update User Profile
export async function updateUserProfile(userId, updatedData) {
    if (!userId) throw new Error("User ID is required for update");
    return apiRequest(`user/${userId}/`, {
        method: "PUT",
        body: JSON.stringify(updatedData),
    });
}

// Delete User
export async function deleteUser(userId) {
    if (!userId) throw new Error("User ID is required for deletion");
    return apiRequest(`user/${userId}/`, { method: "DELETE" });
}
