import { createTask } from './task.js'
import { createProject } from './project.js'

if (JSON.parse(localStorage.getItem("projects")) == undefined ||
  JSON.parse(localStorage.getItem("archive")) == undefined ||
  JSON.parse(localStorage.getItem("doneTasks")) == undefined ||
  JSON.parse(localStorage.getItem("tasks")) == undefined) {
  createDefaultObjs();
  console.log("storage Empty");
}

//createDefaultObjs();

function createDefaultObjs() {
  const tasks = [];
  const projects = [];

  let task1 = createTask(
    "Task Title: Create Home Page",
    `Design and implement the main landing page with hero section, 
    navigation bar, and call-to-action button!.`,
    "Priority: High",
    new Date().toISOString(),
    1,
    0,
    false,
  );
  task1.belongTo = "Web Development";

  let task2 = createTask(
    "Task Title: Design Contact Page",
    `Build a responsive contact form with name, email, message fields, and
     form validation.`,
    "Priority: Medium",
    new Date().toISOString(),
    1,
    0,
    false,
  );
  task2.belongTo = "Web Development";

  let task3 = createTask(
    "Task Title: Build About Page",
    `Add company information, team section, and mission statement 
    with proper layout and styling.`,
    "Priority: Low",
    new Date(2025, 10, 6, 9, 0).toISOString(),
    1,
    0,
    false,
  );
  task3.belongTo = "Web Development";

  let task4 = createTask(
    "Task Title: Add Navbar Component",
    `Develop a reusable navigation bar component with dropdown support and 
    active link highlighting.`,
    "Priority: High",
    new Date(2025, 11, 15, 9, 0).toISOString(),
    1,
    0,
    false,
  );
  task4.belongTo = "Web Development";


  let task5 = createTask(
    "Task Title: Implement Footer Section",
    `Create a footer with social media links, contact info, and copyright text,
     consistent across all pages.`,
    "Priority: Medium",
    new Date(2025, 10, 10, 9, 0).toISOString(),
    1,
    0,
    false,
  );
  task5.belongTo = "Web Development";


  let task6 = createTask(
    "Task Title: Setup Network Topology",
    `Design and configure the physical and logical topology for the office
     LAN including switches, routers, and cabling.`,
    "Priority: High",
    new Date(2025, 10, 7, 9, 0).toISOString(),
    2,
    0,
    false,
  );
  task6.belongTo = "Information Technology";


  let task7 = createTask(
    "Task Title: Configure VLANs",
    `Create and assign VLANs on managed switches to segment network traffic
     based on department or function.",
    "Priority: High`,
    new Date(2025, 10, 12, 9, 0).toISOString(),
    2,
    0,
    false,
  );
  task7.belongTo = "Information Technology";


  let task8 = createTask(
    "Task Title: Setup DHCP and DNS Services",
    `Install and configure DHCP and DNS servers to automate IP management and
     name resolution within the network.`,
    "Priority: Medium",
    new Date(2025, 10, 13, 9, 0).toISOString(),
    2,
    0,
    false,
  );
  task8.belongTo = "Information Technology";


  let task9 = createTask(
    "Task Title: Implement Firewall Rules",
    `Define and apply firewall rules to control inbound and outbound traffic,
     ensuring security and compliance.`,
    "Priority: High",
    new Date(2025, 10, 6, 9, 0).toISOString(),
    2,
    0,
    false,
  );
  task9.belongTo = "Information Technology";


  let task10 = createTask(
    "Task Title: Perform Network Testing",
    `Verify connectivity, measure latency, and ensure that all devices 
    communicate properly across the network segments.`,
    "Priority: Medium",
    new Date(2025, 10, 11, 9, 0).toISOString(),
    2,
    0,
    true,
  );
  task10.belongTo = "Information Technology";


  let task11 = createTask(
    "Task Title: Design System Architecture",
    `Define the overall system architecture including modules, data flow, and
     integration points using UML diagrams.`,
    "Priority: High",
    new Date(2025, 10, 8, 9, 0).toISOString(),
    3,
    0,
    false,
  );

  task11.belongTo = "Software Eng";

  let task12 = createTask(
    "Task Title: Implement Authentication Module",
    "Develop a secure user authentication and authorization module with password hashing and session management.",
    "Priority: High",
    new Date(2025, 11, 8, 9, 0).toISOString(),
    3,
    0,
    false,
  );
  task12.belongTo = "Software Eng";

  let task13 = createTask(
    "Task Title: Write Unit Tests",
    "Create unit tests for core functionalities to ensure code reliability and maintainability using a testing framework.",
    "Priority: Medium",
    new Date(2025, 10, 9, 9, 0).toISOString(),
    3,
    0,
    false,
  );
  task13.belongTo = "Software Eng";

  const newTasks = [
    task1, task2, task3, task4, task5, task6,
    task7, task8, task9, task10, task11, task12, task13
  ];

  tasks.push(...newTasks);


  const project1 = createProject(
    "Web Development",
    "In this Project we will focuse on Learn HTML");

  const project2 = createProject(
    "Information Technology",
    "In this Project we will focuse on Learn Networking");

  const project3 = createProject(
    "Software Eng",
    "In this Project we will focuse on Learn Problem Solving");

  const general = createProject(
    "General",
    "Tasks not assigned to any project yet.",
  );

  projects.push(project1, project2, project3, general);

  const doneTasks = [task10];
  const archive = [task12];

  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("projects", JSON.stringify(projects));
  localStorage.setItem("archive", JSON.stringify(archive));
  localStorage.setItem("doneTasks", JSON.stringify(doneTasks));
}

