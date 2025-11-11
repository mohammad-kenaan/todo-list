import { createTask } from './task.js'
import { createProject } from './project.js'

if (JSON.parse(localStorage.getItem("projects")) == undefined ||
  JSON.parse(localStorage.getItem("archive")) == undefined ||
  JSON.parse(localStorage.getItem("doneTasks")) == undefined ||
  JSON.parse(localStorage.getItem("tasks")) == undefined) {
  restartAndCreateDefaultObjs();
  console.log("storage Empty");
}

//restartAndCreateDefaultObjs();

function restartAndCreateDefaultObjs() {
  const tasks = [];
  const projects = [];


  const projectCounterStart = JSON.parse(localStorage.getItem("projects")).length || 10;
  
  const taskCounterStart = JSON.parse(localStorage.getItem("tasks")).length || 10;

  localStorage.setItem("taskIdCounter", JSON.stringify(taskCounterStart));
  localStorage.setItem("projectIdCounter", JSON.stringify(projectCounterStart));
 
  let task1 = createTask(
    "Task Title: Create Home Page",
    `Design and implement the main landing page with hero section, 
    navigation bar, and call-to-action button!.`,
    2,
    new Date().toISOString(),
    1,
    0,
    false,
    1,
    true
  );
  task1.belongTo = "Web Development";

  let task2 = createTask(
    "Task Title: Design Contact Page",
    `Build a responsive contact form with name, email, message fields, and
     form validation.`,
    2,
    new Date().toISOString(),
    1,
    0,
    false,
    2,
    true
  );
  task2.belongTo = "Web Development";

  let task3 = createTask(
    "Task Title: Build About Page",
    `Add company information, team section, and mission statement 
    with proper layout and styling.`,
    6,
    new Date(2025, 10, 6, 9, 0).toISOString(),
    1,
    0,
    false,
    3,
    true
  );
  task3.belongTo = "Web Development";

  let task4 = createTask(
    "Task Title: Add Navbar Component",
    `Develop a reusable navigation bar component with dropdown support and 
    active link highlighting.`,
    8,
    new Date(2025, 11, 15, 9, 0).toISOString(),
    1,
    0,
    false,
    4,
    true
  );
  task4.belongTo = "Web Development";


  let task5 = createTask(
    "Task Title: Implement Footer Section",
    `Create a footer with social media links, contact info, and copyright text,
     consistent across all pages.`,
    5,
    new Date(2025, 10, 10, 9, 0).toISOString(),
    1,
    0,
    false,
    5,
    true
  );
  task5.belongTo = "Web Development";


  let task6 = createTask(
    "Task Title: Setup Network Topology",
    `Design and configure the physical and logical topology for the office
     LAN including switches, routers, and cabling.`,
    7,
    new Date(2025, 10, 7, 9, 0).toISOString(),
    2,
    0,
    false,
    6,
    true
  );
  task6.belongTo = "Information Technology";


  let task7 = createTask(
    "Task Title: Configure VLANs",
    `Create and assign VLANs on managed switches to segment network traffic
     based on department or function.",
    8`,
    new Date(2025, 10, 12, 9, 0).toISOString(),
    2,
    0,
    false,
    7,
    true
  );
  task7.belongTo = "Information Technology";


  let task8 = createTask(
    "Task Title: Setup DHCP and DNS Services",
    `Install and configure DHCP and DNS servers to automate IP management and
     name resolution within the network.`,
    9,
    new Date(2025, 10, 13, 9, 0).toISOString(),
    2,
    0,
    false,
    8,
    true
  );
  task8.belongTo = "Information Technology";


  let task9 = createTask(
    "Task Title: Implement Firewall Rules",
    `Define and apply firewall rules to control inbound and outbound traffic,
     ensuring security and compliance.`,
    9,
    new Date(2025, 10, 6, 9, 0).toISOString(),
    2,
    0,
    false,
    9,
    true
  );
  task9.belongTo = "Information Technology";


  let task10 = createTask(
    "Task Title: Perform Network Testing",
    `Verify connectivity, measure latency, and ensure that all devices 
    communicate properly across the network segments.`,
    4,
    new Date(2025, 10, 11, 9, 0).toISOString(),
    2,
    0,
    true,
    10,
    true
  );
  task10.belongTo = "Information Technology";


  let task11 = createTask(
    "Task Title: Design System Architecture",
    `Define the overall system architecture including modules, data flow, and
     integration points using UML diagrams.`,
    6,
    new Date(2025, 10, 8, 9, 0).toISOString(),
    3,
    0,
    false,
    11,
    true
  );

  task11.belongTo = "Software Eng";

  let task12 = createTask(
    "Task Title: Implement Authentication Module",
    "Develop a secure user authentication and authorization module with password hashing and session management.",
    5,
    new Date(2025, 11, 8, 9, 0).toISOString(),
    3,
    0,
    false,
    12,
    true
  );
  task12.belongTo = "Software Eng";

  let task13 = createTask(
    "Task Title: Write Unit Tests",
    "Create unit tests for core functionalities to ensure code reliability and maintainability using a testing framework.",
    4,
    new Date(2025, 10, 9, 9, 0).toISOString(),
    3,
    0,
    false,
    13,
    true
  );
  task13.belongTo = "Software Eng";

  const newTasks = [
    task1, task2, task3, task4, task5, task6,
    task7, task8, task9, task10, task11, task12, task13
  ];

  tasks.push(...newTasks);


  const project1 = createProject(
    "Web Development",
    "In this Project we will focuse on Learn HTML",
    1,
    true
  );

  const project2 = createProject(
    "Information Technology",
    "In this Project we will focuse on Learn Networking",
    2,
    true
  );

  const project3 = createProject(
    "Software Eng",
    "In this Project we will focuse on Learn Problem Solving",
    3,
    true
  );

  const general = createProject(
    "General",
    "Tasks not assigned to any project yet.",
    4,
    true
  );

  projects.push(project1, project2, project3, general);

  const doneTasks = [task10];
  const archive = [task12];

  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("projects", JSON.stringify(projects));
  localStorage.setItem("archive", JSON.stringify(archive));
  localStorage.setItem("doneTasks", JSON.stringify(doneTasks));

}
