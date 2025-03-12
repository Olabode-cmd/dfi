import { useAuth } from "../../context/AuthContext"
import { useEffect } from "react";

const Dashboard = () => {
    const { user, isAuthenticated } = useAuth()

    useEffect(() => {
      // Debug checks
      console.log("Token exists:", !!localStorage.getItem("accessToken"));
      console.log("Is Authenticated:", isAuthenticated);
      console.log("User:", user);
    }, [isAuthenticated, user]);
    return (
      <>
        <h2>Auth Status: {isAuthenticated ? "Logged In" : "Not Logged In"}</h2>
        {user && <pre>User Data: {JSON.stringify(user, null, 2)}</pre>}
      </>
    );
}

export default Dashboard