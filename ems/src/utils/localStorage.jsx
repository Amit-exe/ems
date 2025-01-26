const Employees = [
  {
    id: 1,
    name: "Employee One",
    email: "e1@ex.c",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Prepare project report",
        date: "2025-01-25",
        category: "Documentation",
        description: "Compile the project details and create a final report.",
      },
      {
        taskNumber: 2,
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Update client feedback",
        date: "2025-01-24",
        category: "Communication",
        description: "Incorporate client feedback into the presentation.",
      },
      {
        taskNumber: 3,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix login bug",
        date: "2025-01-20",
        category: "Development",
        description: "Resolve the issue with user login authentication.",
      },
      {
        taskNumber: 4,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Organize team-building event",
        date: "2025-01-27",
        category: "Management",
        description: "Plan a team-building activity for department morale.",
      },
    ],
  },
  {
    id: 2,
    name: "Employee Two",
    email: "e2@ex.c",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Create test cases for feature X",
        date: "2025-01-26",
        category: "Testing",
        description: "Develop comprehensive test cases for the new feature.",
      },
      {
        taskNumber: 2,
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare sprint backlog",
        date: "2025-01-27",
        category: "Management",
        description: "Organize tasks and priorities for the upcoming sprint.",
      },
      {
        taskNumber: 3,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Deploy staging build",
        date: "2025-01-22",
        category: "Operations",
        description: "Deploy the latest build to the staging environment.",
      },
      {
        taskNumber: 4,
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        title: "Review pull requests",
        date: "2025-01-25",
        category: "Development",
        description: "Review and provide feedback on pull requests.",
      },
    ],
  },
  {
    id: 3,
    name: "Employee Three",
    email: "e3@ex.c",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Schedule team meeting",
        date: "2025-01-23",
        category: "Communication",
        description: "Set up a team meeting to discuss project updates.",
      },
      {
        taskNumber: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Document API changes",
        date: "2025-01-20",
        category: "Documentation",
        description: "Update the documentation to reflect recent API changes.",
      },
      {
        taskNumber: 3,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Analyze performance metrics",
        date: "2025-01-28",
        category: "Analytics",
        description: "Analyze the performance metrics for the last quarter.",
      },
      {
        taskNumber: 4,
        active: false,
        newTask: true,
        completed: false,
        failed: true,
        title: "Update user guide",
        date: "2025-01-29",
        category: "Documentation",
        description: "Revise and update the user guide for new features.",
      },
    ],
  },
  // Repeat similar logic for employees 4 and 5...
];

const admin = [
  {
    id: 1,
    name: "alice bober",
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(Employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  //   console.log(data));
  return { employees, admin };
};
