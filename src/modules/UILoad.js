import List from './List'
import Project from './Project'
import Task from './Task'
import Storage from './Storage'

export default class UILoad{

    static loadFullPage(){
        let content = document.getElementById("content");
        if(content.innerHTML!=null && content.innerHTML!=""){
            content.innerHTML="";
        }
        // Load Banner
        let banner = UILoad.loadBanner();
        // Load Navigation
        let navigation = UILoad.loadNavigation();
        // Load main/task content
        let mainContent = UILoad.loadMainContent();
        content.appendChild(banner);
        content.appendChild(navigation);
        content.appendChild(mainContent); 
    }

    static loadBanner(){
        let bannerDiv = document.createElement("div");
        bannerDiv.id = "banner";
        let heading = document.createElement("h1");
        heading.id = "heading";
        heading.innerHTML = "My Projects";
        bannerDiv.appendChild(heading);
        return bannerDiv;
    }

    static loadNavigation(){
        let nav = document.createElement("div");
        nav.id = "nav";
        let homeButton = document.createElement("p");
        homeButton.id = "homeButton";
        homeButton.innerHTML = "Home";
        nav.appendChild(homeButton);
        homeButton.addEventListener("click", function(){
            UILoad.loadFullPage();
        });

        let projectsDiv = document.createElement("div");
        projectsDiv.id = "projects";
        // Add the projects to the navigation bar
        let projects = Storage.getList().getProjects();
        for(var i = 0; i < projects.length; i++){
            let projectLink = document.createElement("a");
            projectLink.classList.add("project-link");
            projectLink.id = "project" + projects[i].getTitle();
            projectLink.innerHTML = projects[i].getTitle();

            // Add event listener to each project link
            projectLink.addEventListener("click", function(){
                UILoad.loadProject(this.innerHTML);
            });
            projectsDiv.appendChild(projectLink);
        }

        let addProjectButton = document.createElement("a"); // need to add event listener
        addProjectButton.id = "add-project";
        addProjectButton.innerHTML = "+ Add Project";
        addProjectButton.addEventListener("click", function(){
            UILoad.createAddProjectModal();
        });
        projectsDiv.appendChild(addProjectButton);
        nav.appendChild(projectsDiv);
        return nav;
    }

    static loadMainContent(){
        /* UI for mainContent banner which includes title, key and buttons */
        let mainContent = document.createElement("div");
        mainContent.id = "mainContent";
        let heading = document.createElement("h2");
        heading.innerHTML = "Home";
        heading.id = "mainContentHeading";
        mainContent.appendChild(heading);
        let keyDiv = document.createElement("div");
        keyDiv.id = "key";
        keyDiv.innerHTML = '<h3>Priority Key</h3><span class="low">Low </span><span class="medium">Medium </span><span class="high">High</span>';
        mainContent.appendChild(keyDiv);
        /* UI for the tasks */
        let tasksDiv = document.createElement("div");
        tasksDiv.id = "tasks";
        mainContent.appendChild(tasksDiv);
        return mainContent;        
    }


    static loadProject(projectTitle){
        let projects = Storage.getList().getProjects();
        let project = "";
        for(let i=0; i<projects.length; i++){
            if(projects[i].getTitle()==projectTitle){
                project = projects[i];
            }
        }
        let tasksDiv = document.getElementById("tasks");
        tasksDiv.innerHTML= "";
        let tasks = project.getTasks();
        this.displayTasks(tasks);
        let mainHeader = document.getElementById("mainContentHeading");
        mainHeader.innerHTML = projectTitle;
    }


    static displayTasks(tasks){
        let tasksDiv = document.getElementById("tasks");
        for(let j=0; j<tasks.length; j++){
                let taskElement = document.createElement("div");
                //taskElement.id = "project:" + project.getTitle() + ".task:" + tasks[j].getTitle();
                taskElement.classList.add("task");
                // Add Title
                let taskTitle = document.createElement("div");
                taskTitle.classList.add("title");
                taskTitle.innerHTML = tasks[j].getTitle();
                // Add description
                let taskDescription = document.createElement("div");
                taskDescription.classList.add("description");
                taskDescription.innerHTML = tasks[j].getDescription();
                // Add due date
                let taskDueDate = document.createElement("div");
                taskDueDate.classList.add("dueDate");
                taskDueDate.classList.add(tasks[j].getPriority());
                taskDueDate.innerHTML = tasks[j].getDueDate();
                // Add iscompleted 
                let isComplete = document.createElement("div");
                isComplete.classList.add("isComplete");
                isComplete.innerHTML="Complete:";
                // Add check box
                let completeCheckbox = document.createElement("input");
                completeCheckbox.setAttribute("type", "checkbox");
                completeCheckbox.addEventListener("change", function(){
                    // get if checked
                    if(this.checked){
                        tasks[j].setIsComplete(true);
                        taskElement.classList.add("complete");
                    }else{
                        tasks[j].setIsComplete(false);
                        taskElement.classList.remove("complete");
                    }
                    
                });
                isComplete.appendChild(completeCheckbox);
                // Add delete button
                let deleteButton = document.createElement("div"); 
                deleteButton.classList.add("deleteTask");
                deleteButton.innerHTML = "Delete Task";
                deleteButton.addEventListener("click", function(){
                    // GET PARENT ID FOR TASK TO DELETE AND CALL METHOD
                    console.log("delete button clicked");
                });
                taskElement.appendChild(taskTitle);
                taskElement.appendChild(deleteButton);
                taskElement.appendChild(taskDescription);
                taskElement.appendChild(taskDueDate);
                taskElement.appendChild(isComplete);
                tasksDiv.appendChild(taskElement);
            }
    }
    
    static createAddProjectModal(){
        let modalDiv = document.getElementById("projectModal")
        if(modalDiv==null || modalDiv==""){
            modalDiv = document.createElement("div");
            modalDiv.id = "projectModal";
            modalDiv.innerHTML = '<div class="modal-content"><span class="close">&times;</span><h2>Add Project</h2><form action="#" method="post" id="addProjectForm"><div id="formFields"><label for="Title">Title:</label><input type="text" id="title" required></div><button type="button" id="submitBtn"">Add</button></form></div>';
            content.appendChild(modalDiv);            
        }else{
            modalDiv.style.display="block";
        }
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function() {
            modalDiv.style.display = "none";
        }

        let addButton = document.getElementById("submitBtn");
        addButton.addEventListener("click", function(){
            // ADD OPTION TO CHECK THAT THE TITLE IS NOT THE SAME AS ANOTHER PROJECT TITLE
            let project = new Project(this.form.title.value);
            Storage.addProject(project);
            modalDiv.style.display="none";
            UILoad.loadProject(project.getTitle());
        });
        
    }
}