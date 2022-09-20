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
        Storage.loadTodayTasks();
        Storage.loadWeeklyTasks();
        UILoad.loadNavigation();
        // Load main/task content
        UILoad.loadMainContent();
        content.appendChild(banner);
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
        console.log("in the load navigation");
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
            // Get total number of tasks for each project
            let taskNumber = projects[i].getTasks().length;
            console.log("taskNumber for tasks: " + projects[i].getTitle() + " is " + taskNumber);


            let projectLink = document.createElement("a");
            projectLink.classList.add("project-link");
            projectLink.id = "project" + projects[i].getTitle();
            projectLink.innerHTML = projects[i].getTitle();
            let projectTasksNumber = document.createElement("p");
            projectTasksNumber.innerHTML = taskNumber;

            // Add event listener to each project link
            projectLink.addEventListener("click", function(){
                UILoad.loadProject(this.innerHTML);
            });
            projectsDiv.appendChild(projectLink);
            projectsDiv.appendChild(projectTasksNumber);
        }

        let addProjectButton = document.createElement("a"); // need to add event listener
        addProjectButton.id = "add-project";
        addProjectButton.innerHTML = "+ Add Project";
        addProjectButton.addEventListener("click", function(){
            UILoad.createAddProjectModal();
        });
        projectsDiv.appendChild(addProjectButton);
        nav.appendChild(projectsDiv);
        content.appendChild(nav);
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
        let addTask = document.createElement("div");
        addTask.id="addTask";
        mainContent.appendChild(addTask);
        /* UI for the tasks */
        let tasksDiv = document.createElement("div");
        tasksDiv.id = "tasks";
        mainContent.appendChild(tasksDiv);
        content.appendChild(mainContent);
        // Loop through projects and display all tasks
        let projects = Storage.getList().getProjects();
        
        for(let i=0; i<projects.length; i++){
            if(projects[i].getTitle()!="Today" && projects[i].getTitle()!="This Week"){
                UILoad.displayTasks(projects[i], "home");
            }
           
        }     
    }

    static loadProject(projectTitle){
        console.log("loading project: " + projectTitle);
        if(projectTitle=="Today"){
            Storage.loadTodayTasks();
        }else if(projectTitle=="This Week"){
            Storage.loadWeeklyTasks();
        }
        let projects = Storage.getList().getProjects();
        let project = "";
        for(let i=0; i<projects.length; i++){
            if(projects[i].getTitle()==projectTitle){
                project = projects[i];
            }
        }
        let tasksDiv = document.getElementById("tasks");
        tasksDiv.innerHTML= "";
        //let tasks = project.getTasks();
        this.displayTasks(project, "project");
        let mainHeader = document.getElementById("mainContentHeading");
        mainHeader.innerHTML = projectTitle;
        let addTask = document.getElementById("addTask");
        addTask.innerHTML="";
        let addTaskBtn = document.createElement("button");
        addTaskBtn.id = "addTaskBtn";
        addTaskBtn.innerHTML = "Add Task";
        addTaskBtn.addEventListener("click", function(){
            UILoad.createAddTaskModal(project);
        });        
        
        if(projectTitle!="This Week" && projectTitle!="Today"){
            addTask.appendChild(addTaskBtn);
        }
    }


    static displayTasks(project, page){
        let list = Storage.getList();
        let tasks = list.getProject(project.getTitle()).getTasks();
        let tasksDiv = document.getElementById("tasks");
        if(tasks.length==0 && page=="project"){
            tasksDiv.innerHTML = "No tasks exist in this project yet.";
        }else{
            for(let j=0; j<tasks.length; j++){

                let taskElement = document.createElement("div");
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
                // If task already complete, set checkbox and class
                if(tasks[j].isComplete){
                    completeCheckbox.checked = true;
                    taskElement.classList.add("complete");
                }else{
                    completeCheckbox.checked = false;
                    taskElement.classList.remove("complete");
                }
                
                console.log(completeCheckbox.checked);
                completeCheckbox.addEventListener("change", function(){
                    // get if checked
                    if(this.checked){
                        tasks[j].setIsComplete(true);
                        taskElement.classList.add("complete");
                    }else{
                        tasks[j].setIsComplete(false);
                        taskElement.classList.remove("complete");
                    }
                    Storage.saveList(list);
                    
                });
                isComplete.appendChild(completeCheckbox);
                // Add delete button
                let deleteButton = document.createElement("div"); 
                deleteButton.classList.add("deleteTask");
                deleteButton.innerHTML = "Delete Task";
                deleteButton.addEventListener("click", function(){
                    Storage.deleteTask(tasks[j], project.getTitle());
                    UILoad.loadProject(project.getTitle());
                });
                taskElement.setAttribute("project-name", project.getTitle());
                taskElement.appendChild(taskTitle);
                taskElement.appendChild(deleteButton);
                taskElement.appendChild(taskDescription);
                taskElement.appendChild(taskDueDate);
                taskElement.appendChild(isComplete);
                tasksDiv.appendChild(taskElement);
            }
        }
        
    }
    
    static createAddProjectModal(){
        let modalDiv = document.getElementById("projectModal")
        if(modalDiv==null || modalDiv==""){
            modalDiv = document.createElement("div");
            modalDiv.id = "projectModal";
            modalDiv.innerHTML = `<div class="modal-content"><span class="close">&times;</span><h2>Add Project</h2>
            <form action="#" method="post" id="addProjectForm"><div id="formFields">
            <label for="Title">Title:</label><input type="text" id="title" required/></div>
            <input type="submit" value="Submit"></form></div>`;
            content.appendChild(modalDiv);            
        }else{
            let form = document.getElementById("addProjectForm");
            form.reset();
            modalDiv.style.display="block";
        }
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function() {
            modalDiv.style.display = "none";
        }

        let form = document.getElementById("addProjectForm");

        form.addEventListener('submit', (event) => {
            let projectExists = false;
            let projects = Storage.getList().getProjects();
            for(let i=0; i<projects.length; i++){
                if(projects[i].getTitle().toLowerCase() == form.title.value.toLowerCase()){
                    projectExists = true;
                   
                }
            }
            if(projectExists){
                alert("A task with this project already exists.  Please change the title.");
                event.preventDefault();
                event.stopImmediatePropagation();
            }else{
                let project = new Project(form.title.value);
                Storage.addProject(project);
                modalDiv.style.display="none";
                UILoad.loadNavigation();
                UILoad.loadProject(project.getTitle());
                event.preventDefault();
                event.stopImmediatePropagation();
            }
            
            
        });
        
    }

    static createAddTaskModal(project){
        let modalDiv = document.getElementById("taskModal")
        if(modalDiv==null || modalDiv==""){
            modalDiv = document.createElement("div");
            modalDiv.id = "taskModal";
            modalDiv.innerHTML = `<div class="modal-content"><span class="close">&times;</span>
            <h2>Add Task</h2><form action="#" method="post" id="addTaskForm"><div id="formFields">
            <label for="Title">Title:</label><input type="text" id="title" required/>
            Description:<textarea name="description" form="addTaskForm" required></textarea>
            Priority: <input type="radio" id="low" name="priority" value="low" checked><label for="low">Low</label><br>
            <input type="radio" id="medium" name="priority" value="medium"><label for="medium">Medium</label><br>
            <input type="radio" id="high" name="priority" value="high"><label for="high">High</label>
            <label for="dueDate">Date Due:</label><br><input type="date" id="dueDate" name="dueDate">
            <br></div><input type="submit" value="Submit"></form></div>`;
            content.appendChild(modalDiv);            
        }else{
            modalDiv.style.display="block";
            let form = document.getElementById("addTaskForm");
            form.reset();
        }
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function() {
            modalDiv.style.display = "none";
        }
        let form = document.getElementById("addTaskForm");

        form.addEventListener('submit', (event) => {

            let taskExists = false;
            let tasks = Storage.getList().getProject(project.getTitle()).getTasks();
            for(let i=0; i<tasks.length; i++){
                if(tasks[i].getTitle().toLowerCase() == form.title.value.toLowerCase()){
                    taskExists = true;
                }
            }
            if(taskExists){
                alert("A task with this title already appears in this project.  Please change the title.");
                event.preventDefault();
                event.stopImmediatePropagation();
            }else{
                console.log("the due date in the form is: " + form.dueDate.value);
                let task = new Task(form.title.value, form.description.value, form.priority.value, form.dueDate.value, false);
                Storage.addTask(task, project.getTitle());
                modalDiv.style.display="none";
                UILoad.loadProject(project.getTitle());
                event.preventDefault();
                event.stopImmediatePropagation();
            }
            
        });

    }
}