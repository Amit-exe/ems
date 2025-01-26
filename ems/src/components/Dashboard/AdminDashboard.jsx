import React from "react";
import Header from "../other/header";
import CreateTask from "../other/createTask";
import AllTask from "../other/AllTask";

function AdminDashboard({ handleLogout }) {
  return (
    <div className="h-screen w-full p-10">
      <Header handleLogout={handleLogout} />
      <CreateTask />
      <AllTask />
    </div>
  );
}

export default AdminDashboard;
