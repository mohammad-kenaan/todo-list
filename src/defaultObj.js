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
    "Design and implement the main landing page with hero section, navigation bar, and call-to-action button!.",
    "Priority: High",
    new Date().toISOString(),
    123,
    0,
    false,
    111,
  );


  let task2 = createTask(
    "Task Title: Design Contact Page",
    "Build a responsive contact form with name, email, message fields, and form validation.",
    "Priority: Medium",
    new Date().toISOString(),
    123,
    0,
    false,
    112,
  );

  let task3 = createTask(
    "Task Title: Build About Page",
    "Add company information, team section, and mission statement with proper layout and styling.",
    "Priority: Low",
    new Date(2025, 10, 6, 9, 0).toISOString(),
    123,
    0,
    false,
    113
  );

  let task4 = createTask(
    "Task Title: Add Navbar Component",
    "Develop a reusable navigation bar component with dropdown support and active link highlighting.",
    "Priority: High",
    new Date(2025, 11, 15, 9, 0).toISOString(),
    123,
    0,
    false,
    114,
  );

  let task5 = createTask(
    "Task Title: Implement Footer Section",
    "Create a footer with social media links, contact info, and copyright text, consistent across all pages.",
    "Priority: Medium",
    new Date(2025, 10, 10, 9, 0).toISOString(),
    123,
    0,
    false,
    115,
  );

  let task6 = createTask(
    "Task Title: Setup Network Topology",
    "Design and configure the physical and logical topology for the office LAN including switches, routers, and cabling.",
    "Priority: High",
    new Date(2025, 10, 7, 9, 0).toISOString(),
    456,
    0,
    false,
    201,
  );

  let task7 = createTask(
    "Task Title: Configure VLANs",
    "Create and assign VLANs on managed switches to segment network traffic based on department or function.",
    "Priority: High",
    new Date(2025, 10, 12, 9, 0).toISOString(),
    456,
    0,
    false,
    202,
  );

  let task8 = createTask(
    "Task Title: Setup DHCP and DNS Services",
    "Install and configure DHCP and DNS servers to automate IP management and name resolution within the network.",
    "Priority: Medium",
    new Date(2025, 10, 13, 9, 0).toISOString(),
    456,
    0,
    false,
    203,
  );

  let task9 = createTask(
    "Task Title: Implement Firewall Rules",
    "Define and apply firewall rules to control inbound and outbound traffic, ensuring security and compliance.",
    "Priority: High",
    new Date(2025, 10, 6, 9, 0).toISOString(),
    456,
    0,
    false,
    204,
  );

  let task10 = createTask(
    "Task Title: Perform Network Testing",
    "Verify connectivity, measure latency, and ensure that all devices communicate properly across the network segments.",
    "Priority: Medium",
    new Date(2025, 10, 11, 9, 0).toISOString(),
    456,
    0,
    true,
    205,
  );

  let task11 = createTask(
    "Task Title: Design System Architecture",
    "Define the overall system architecture including modules, data flow, and integration points using UML diagrams.",
    "Priority: High",
    new Date(2025, 10, 8, 9, 0).toISOString(),
    789,
    0,
    false,
    301,
  );

  let task12 = createTask(
    "Task Title: Implement Authentication Module",
    "Develop a secure user authentication and authorization module with password hashing and session management.",
    "Priority: High",
    new Date(2025, 11, 8, 9, 0).toISOString(),
    789,
    0,
    false,
    302,
  );

  let task13 = createTask(
    "Task Title: Write Unit Tests",
    "Create unit tests for core functionalities to ensure code reliability and maintainability using a testing framework.",
    "Priority: Medium",
    new Date(2025, 10, 9, 9, 0).toISOString(),
    789,
    0,
    false,
    303,
  );


  const newTasks = [
    task1, task2, task3, task4, task5, task6,
    task7, task8, task9, task10, task11, task12, task13
  ];

  tasks.push(...newTasks);

  //--------------- 

  const project1 = createProject(
    123,
    "Web Development",
    "In this Project we will focuse on Learn HTML",
    false);

  const project2 = createProject(
    456,
    "Information Technology",
    "In this Project we will focuse on Learn Networking",
    false);

  const project3 = createProject(
    789,
    "Software Eng",
    "In this Project we will focuse on Learn Problem Solving",
    false);

  const general = createProject(
    100,
    "General",
    "Tasks not assigned to any project yet.",
    false);

  projects.push(project1, project2, project3, general);

  const doneTasks = [task10];
  const archive = [task12];
  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("projects", JSON.stringify(projects));
  localStorage.setItem("archive", JSON.stringify(archive));
  localStorage.setItem("doneTasks", JSON.stringify(doneTasks));
}

