const BASE_URL = import.meta.env.VITE_APP_API;

export async function apiRequest(endpoint, options = {}, authRequired = true) {
    const headers = {
        "Content-Type": "application/json",
        ...(authRequired && localStorage.getItem("accessToken")
            ? { Authorization: `Bearer ${localStorage.getItem("accessToken")}` }
            : {}),
        ...options.headers,
    };

    try {
        const response = await fetch(`${BASE_URL}/${endpoint}`, {
            ...options,
            headers, // Use dynamically built headers
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Something went wrong");
        }

        return response.json();
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
}