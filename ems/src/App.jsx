import React, { useContext, useLayoutEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null); // Stores the role (e.g., 'admin', 'employee')
  const [loggedInUser, setLoggedInUser] = useState(null); // Stores the user data (for employees)
  const [loading, setLoading] = useState(true); // Indicates whether the app is still fetching user data
  const authdata = useContext(AuthContext);

  useLayoutEffect(() => {
    const fetchLoggedInUser = async () => {
      const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
      console.log("Restored from localStorage:", storedUser); // Debugging

      if (storedUser) {
        setUser(storedUser.role);
        setLoggedInUser(storedUser.data); // Restore employee data
      }
      setLoading(false); // Loading is complete
    };

    fetchLoggedInUser();
  }, [authdata]);

  const handleLogin = (email, password) => {
    if (
      authdata &&
      authdata.admin.find((e) => e.email === email && e.password === password)
    ) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authdata) {
      const employee = authdata.employees.find(
        (e) => e.email === email && e.password === password
      );

      if (employee) {
        setUser("employee");
        setLoggedInUser(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        alert("Invalid credentials");
      }
    }
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedInUser(null);
    localStorage.removeItem("loggedInUser");
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading placeholder
  }

  return (
    <div>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard handleLogout={handleLogout} />
      ) : (
        <EmployeeDashboard handleLogout={handleLogout} data={loggedInUser} />
      )}
    </div>
  );
};

export default App;
