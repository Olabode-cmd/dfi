import { apiRequest } from "./api";
// const BASE_URL = import.meta.env.VITE_APP_API;

// Register User
export async function registerUser(credentials) {
    return apiRequest("user/v1/register/", { method: "POST", body: JSON.stringify(credentials) }, false);
}

// Login User
// export async function loginUser(credentials) {
//     return apiRequest("user/login/", { method: "POST", body: JSON.stringify(credentials) }, false);
// }


const BASE_URL = "https://api.digitalfortressltd.com"; 

export async function authLogin(email, password) {
    try {
        const response = await fetch(`${BASE_URL}/user/login/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data?.detail || "Invalid login credentials");
        }
        localStorage.setItem("userId", data.user.id);
        localStorage.setItem("accessToken", data.access); 
        localStorage.setItem("userEmail", data.user.email);
        localStorage.setItem("userName", data.user.username);

        return data; // Return user details instead of just `true`
    } catch (error) {
        console.error("Login error:", error.message);
        throw error;
    }
}



export async function authSignup(email, phoneNumber, username, password, confirmPassword) {
    if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
    }

    try {
        const response = await fetch(`${BASE_URL}/user/v1/register/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({ email, username, phone_number: phoneNumber, password }),
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || "Signup failed");
        }

        return data; // Return full response data instead of just `true`
    } catch (error) {
        console.error("Signup error:", error);
        throw error;
    }
}
