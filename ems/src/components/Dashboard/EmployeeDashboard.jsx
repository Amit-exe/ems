import React from "react";
import Header from "../other/header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ handleLogout, data }) => {
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
      <Header handleLogout={handleLogout} data={data} />
      <TaskListNumbers data={data} />
      <TaskList />
    </div>
  );
};

export default EmployeeDashboard;
