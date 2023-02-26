import img from "./images/img.jpg";
import style from "./styles/style.css";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

console.log("Hello world! My name is Uche Azubuko.");

const content = document.getElementById("content");

// Create Navbar

const createNavbar = () => {
	console.log("Creating Navbar");
	const header = document.createElement("header");
	const nav = document.createElement("nav");
	content.appendChild(header);
	content.appendChild(nav);
	nav.innerHTML = `<input type="text" class="search" placeholder='Search'>
    <i class="fa-solid fa-magnifying-glass search-icon"></i>
    `;
};

createNavbar();

const createSideBar = () => {
	console.log("Creating Sidebar");
	const sideBar = document.createElement("aside");
	content.appendChild(sideBar);
	sideBar.innerHTML = `<h1>ToDo List</h1>
    <div class='tasks'>
        <i class="fa-solid fa-list-check"></i>
        <span>My Tasks</span>
        <div class="task">
            <input type="text" class="add-task" placeholder="Add a new list">
            <i class="fa-solid fa-file task-icon"></i>
        </div>
    </div>
    <div class="delete">
            <span>Delete</span>
            <i class="fa-solid fa-trash"></i>
    </div>`;
};

createSideBar();
