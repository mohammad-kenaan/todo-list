import { createTask } from './task.js'
import { createProject } from './project.js'
import { appControllerCanDo } from "./features.js";




// createDefaultObjs();

function createDefaultObjs() {

  const Controller = appControllerCanDo();

  const tasks = [];  // has tasks Objescts
  const projects = [];  // has Projects Objescts

  let task1 = createTask(
    111,
    "Task Title: Create Home Page",
    "Design and implement the main landing page with hero section, navigation bar, and call-to-action button.",
    "Priority: High",
    "March / 11",
    123,
    0,
    false
  );

  let task2 = createTask(
    112,
    "Task Title: Design Contact Page",
    "Build a responsive contact form with name, email, message fields, and form validation.",
    "Priority: Medium",
    "March / 12",
    123,
    0,
    false
  );

  let task3 = createTask(
    113,
    "Task Title: Build About Page",
    "Add company information, team section, and mission statement with proper layout and styling.",
    "Priority: Low",
    "March / 13",
    123,
    0,
    false
  );

  let task4 = createTask(
    114,
    "Task Title: Add Navbar Component",
    "Develop a reusable navigation bar component with dropdown support and active link highlighting.",
    "Priority: High",
    "March / 14",
    123,
    0,
    false
  );

  let task5 = createTask(
    115,
    "Task Title: Implement Footer Section",
    "Create a footer with social media links, contact info, and copyright text, consistent across all pages.",
    "Priority: Medium",
    "March / 15",
    123,
    0,
    false
  );


  let task6 = createTask(
    201,
    "Task Title: Setup Network Topology",
    "Design and configure the physical and logical topology for the office LAN including switches, routers, and cabling.",
    "Priority: High",
    "April / 01",
    456,
    0,
    false
  );

  let task7 = createTask(
    202,
    "Task Title: Configure VLANs",
    "Create and assign VLANs on managed switches to segment network traffic based on department or function.",
    "Priority: High",
    "April / 02",
    456,
    0,
    false
  );

  let task8 = createTask(
    203,
    "Task Title: Setup DHCP and DNS Services",
    "Install and configure DHCP and DNS servers to automate IP management and name resolution within the network.",
    "Priority: Medium",
    "April / 03",
    456,
    0,
    false
  );

  let task9 = createTask(
    204,
    "Task Title: Implement Firewall Rules",
    "Define and apply firewall rules to control inbound and outbound traffic, ensuring security and compliance.",
    "Priority: High",
    "April / 04",
    456,
    0,
    false
  );

  let task10 = createTask(
    205,
    "Task Title: Perform Network Testing",
    "Verify connectivity, measure latency, and ensure that all devices communicate properly across the network segments.",
    "Priority: Medium",
    "April / 05",
    456,
    0,
    true
  );

  let task11 = createTask(
    301,
    "Task Title: Design System Architecture",
    "Define the overall system architecture including modules, data flow, and integration points using UML diagrams.",
    "Priority: High",
    "May / 01",
    789,
    0,
    false
  );

  let task12 = createTask(
    302,
    "Task Title: Implement Authentication Module",
    "Develop a secure user authentication and authorization module with password hashing and session management.",
    "Priority: High",
    "May / 02",
    789,
    0,
    false
  );

  let task13 = createTask(
    303,
    "Task Title: Write Unit Tests",
    "Create unit tests for core functionalities to ensure code reliability and maintainability using a testing framework.",
    "Priority: Medium",
    "May / 03",
    789,
    0,
    false
  );

  const newTasks = [
    task1, task2, task3, task4, task5, task6,
    task7, task8, task9, task10, task11, task12, task13
  ];

  tasks.push(...newTasks);

  //--------------- 



  function filterTasks(id) {
    return tasks.filter(task => task.projectId == id);
  }

  const project1 = createProject(
    123,
    "Web Development",
    "In this Project we will focuse on Learn HTML",
    filterTasks(123),
    false);

  const project2 = createProject(
    456,
    "Information Technology",
    "In this Project we will focuse on Learn Networking",
    filterTasks(456),
    false);

  const project3 = createProject(
    789,
    "Software Eng",
    "In this Project we will focuse on Learn Problem Solving",
    filterTasks(789),
    false);

  projects.push(project1, project2, project3);


  const doneTasks = [task10];
  const archive = [task12];
  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("projects", JSON.stringify(projects));
  localStorage.setItem("archive", JSON.stringify(archive));
  localStorage.setItem("doneTasks", JSON.stringify(doneTasks));


}

