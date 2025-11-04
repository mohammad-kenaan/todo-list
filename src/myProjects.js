import { appControllerCanDo } from "./features.js";


const pageTitle = document.querySelector(".page-title");
const myProjectBtn = document.querySelector("#btn-projects");
const Controller = appControllerCanDo();

const projects = JSON.parse(localStorage.getItem("projects")) || [];  // has tasks Objescts

const todoList = document.querySelector('.todo-list');


