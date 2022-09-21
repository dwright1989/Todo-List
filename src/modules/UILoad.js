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
        let nav = document.getElementById("nav");
        if(nav!=null && nav!=""){
            nav.innerHTML="";
        }else{
            nav = document.createElement("div");
            nav.id = "nav";
        }
        let homeButton = document.createElement("p");
        homeButton.id = "homeButton";
        homeButton.innerHTML = "Home";
   
        nav.appendChild(homeButton);
        homeButton.addEventListener("click", function(){
            UILoad.loadFullPage();
        });

        let projectsSectionTitle = document.createElement("p");
        projectsSectionTitle.innerHTML = "Projects";
        nav.appendChild(projectsSectionTitle);
        let projectsDiv = document.createElement("div");
        projectsDiv.id = "projects";
        // Add the projects to the navigation bar
        let projects = Storage.getList().getProjects();
        for(let i = 0; i < projects.length; i++){
            // Get total number of tasks for each project (get only the uncompleted tasks)
            let tasks = projects[i].getTasks();
            let taskNumber = 0;
            for(let j = 0; j<tasks.length; j++){
                if(!(tasks[j].isComplete)){
                    taskNumber++;
                }
            }
            
            let projectLink = document.createElement("a");
            projectLink.classList.add("projectLink");
            projectLink.id = "project" + projects[i].getTitle();
            projectLink.innerHTML = projects[i].getTitle();
            let projectTasksNumber = document.createElement("p");
            projectTasksNumber.innerHTML = taskNumber;
            if(taskNumber>0){
                projectTasksNumber.classList.add("todo");
            }

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
        heading.innerHTML = "Home - all tasks";
        heading.id = "mainContentHeading";
        mainContent.appendChild(heading);
        let addTask = document.createElement("div");
        addTask.id="addTask";
        mainContent.appendChild(addTask);
        /* UI for the tasks */
        let outerTasksDiv = document.createElement("div");
        outerTasksDiv.id = "tasksDiv";
        let tasksDiv = document.createElement("div");
        tasksDiv.id = "tasks";
        outerTasksDiv.append(tasksDiv);
        mainContent.appendChild(outerTasksDiv);
        content.appendChild(mainContent);
        // Loop through projects and display all tasks
        let projects = Storage.getList().getProjects();
        
        for(let i=0; i<projects.length; i++){
            UILoad.displayTasks(projects[i], "home");           
        }     
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
        UILoad.displayTasks(project, "project");
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
        addTask.appendChild(addTaskBtn);
    }


    static displayTasks(project, page){
        let list = Storage.getList();
        let tasks = list.getProject(project.getTitle()).getTasks();
        let tasksDiv = document.getElementById("tasks");
        if(tasks.length==0 && page=="project"){
            tasksDiv.innerHTML = "No tasks exist in this project yet.";
            tasksDiv.classList.remove("border");
        }else{
            tasksDiv.classList.add("border");
            for(let j=0; j<tasks.length; j++){
                
                let taskElement = UILoad.displayTask(tasks[j], project);
                
                UILoad.addTaskEventListeners(taskElement, tasks[j], project.getTitle(), page);

                tasksDiv.appendChild(taskElement);
            }
        }
        
    }
    
    static displayTask(task, project){
                let taskElement = document.createElement("div");
                taskElement.classList.add("task");
                // Create the basic summary
                let summaryDiv = UILoad.createSummary(task);
                let detailsDiv = UILoad.createDetails(task, project, taskElement);

                
                taskElement.setAttribute("project-name", project.getTitle());
                taskElement.appendChild(summaryDiv);
                taskElement.appendChild(detailsDiv);
                return taskElement;
    }

    static createSummary(task){
                let summaryDiv = document.createElement("div");
                summaryDiv.classList.add("summary");
                let taskTitle = document.createElement("div");
                taskTitle.classList.add("title");
                taskTitle.innerHTML = task.getTitle();
                let taskDueDate = document.createElement("div");
                taskDueDate.classList.add("dueDate");
                
                taskDueDate.innerHTML = task.getDueDate();
                //Buttons
                let summaryButtons = document.createElement("div");
                summaryButtons.classList.add("summaryButtons");
                let showDetails = document.createElement("div");
                showDetails.classList.add("showDetails");
                let showDetailsButton = document.createElement("a");
                showDetailsButton.innerHTML = "Show Details";
                showDetailsButton.classList.add("showDetailsButton");
                showDetails.appendChild(showDetailsButton);

                let edit = document.createElement("div"); 
                edit.classList.add("editTask");
                let editButton = document.createElement("a");
                editButton.innerHTML = "Edit";
                edit.appendChild(editButton);

                let deleteTask = document.createElement("div"); 
                deleteTask.classList.add("deleteTask");
                let deleteButton = document.createElement("a");
                deleteButton.innerHTML = "Delete";
                deleteTask.appendChild(deleteButton);

                summaryButtons.appendChild(showDetails);
                summaryButtons.appendChild(deleteTask);
                summaryButtons.appendChild(edit);
                summaryDiv.appendChild(taskTitle);
                summaryDiv.appendChild(taskDueDate);
                summaryDiv.appendChild(summaryButtons);
                return summaryDiv;
    }

    static createDetails(task, project, taskElement){
        // Create the details
        
        let detailsDiv = document.createElement("div");
        detailsDiv.classList.add("details");
        let taskDescription = document.createElement("div");
        taskDescription.classList.add("description");
        taskDescription.innerHTML = task.getDescription();

        let projectTitle = document.createElement("div");
        projectTitle.innerHTML = "Project: " + project.getTitle();
        projectTitle.classList.add("projectTitleDiv");
        
        
        let priorityDiv = document.createElement("div");
        priorityDiv.classList.add("priority");
        priorityDiv.innerHTML = "Priority: <p class='"+task.getPriority().toLowerCase()+"'>" + task.getPriority() + "</p>";

        // Add iscompleted 
        let isComplete = document.createElement("div");
        isComplete.classList.add("isComplete");
        isComplete.innerHTML="Complete:";
        // Add check box
        let completeCheckbox = document.createElement("input");
        completeCheckbox.setAttribute("type", "checkbox");
        // If task already complete, set checkbox and class
        if(task.isComplete){
            completeCheckbox.checked = true;
            taskElement.classList.add("complete");
        }else{
            completeCheckbox.checked = false;
            taskElement.classList.remove("complete");
        }

        completeCheckbox.addEventListener("change", function(){
            // get if checked
            if(this.checked){
                task.setIsComplete(true);
                Storage.setTaskCompleted(project.getTitle(), task, true);
                taskElement.classList.add("complete");
            }else{
                task.setIsComplete(false);
                Storage.setTaskCompleted(project.getTitle(), task, false);
                taskElement.classList.remove("complete");
            }
           
            UILoad.loadNavigation();
        });
        isComplete.appendChild(completeCheckbox);

        detailsDiv.appendChild(taskDescription);
        detailsDiv.appendChild(projectTitle);
        detailsDiv.appendChild(priorityDiv);
        detailsDiv.appendChild(isComplete);
        return detailsDiv;
    }

    static addTaskEventListeners(taskElem, task, projectTitle, page){
                let detailsDiv = taskElem.querySelector('.details');
                let summary = taskElem.querySelector('.summary');
                let summaryButton = summary.querySelector('.summaryButtons');
                let showDetailsButton = summaryButton.querySelector('.showDetailsButton');
                let deleteTask = summaryButton.querySelector('.deleteTask');
                let edit = summaryButton.querySelector('.editTask');

                // show details
                showDetailsButton.addEventListener("click", function(){
                    if(showDetailsButton.innerHTML=="Show Details"){
                        showDetailsButton.innerHTML="Hide Details";
                        detailsDiv.style.display = "grid";
                        
                    }else{
                        showDetailsButton.innerHTML="Show Details";
                        detailsDiv.style.display = "none";
                    }
                });
                // delete task
                deleteTask.addEventListener("click", function(){
                    Storage.deleteTask(task, projectTitle);
                    if(page.toLowerCase()=="home"){
                        UILoad.loadFullPage();
                    }else{
                        UILoad.loadProject(projectTitle);
                    }
                });
                // edit task
                edit.addEventListener("click", function(){
                    UILoad.createEditTaskModel(task, projectTitle);
                });
    }

    static createEditTaskModel(task, projectTitle){
        let modalDiv = document.getElementById("taskEditModal");
        if(modalDiv!=null && modalDiv!=""){
            modalDiv.remove();
        }
        modalDiv = document.createElement("div");
        modalDiv.id = "taskEditModal";
        modalDiv.innerHTML = `<div class="modal-content"><span class="close">&times;</span>
        <h2>Edit Task</h2><form action="#" method="post" id="editTaskForm"><div id="formFields">
        <label for="Title">Title:</label><input type="text" id="title" value="`+task.getTitle()+`"required/>
        Description:<textarea name="description" form="editTaskForm"  value="`+task.getDescription()+`" required>`+task.getDescription()+`</textarea>
        Priority: <input type="radio" id="low" name="priority" value="`+task.getPriority()+`" checked><label for="low">Low</label><br>
        <input type="radio" id="medium" name="priority" value="medium"><label for="medium">Medium</label><br>
        <input type="radio" id="high" name="priority" value="high"><label for="high">High</label>
        <label for="dueDate">Date Due:</label><br><input type="date" id="dueDate" name="dueDate" value="`+task.getDueDate()+`">
        <input type="hidden" id="project" name="project" value="`+projectTitle+`">
        <br></div><input type="submit" value="Submit"></form></div>`;
        content.appendChild(modalDiv);            
        
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function() {
            modalDiv.remove();
        }
        let form = document.getElementById("editTaskForm");

        form.addEventListener('submit', (event) => {
            let taskExists = false;
            let list = Storage.getList();
            let tasks = list.getProject(projectTitle).getTasks();
            for(let i=0; i<tasks.length; i++){
                if(tasks[i].getTitle().toLowerCase() == form.title.value.toLowerCase()){
                    if(form.title.value.toLowerCase()!=task.getTitle().toLowerCase()){
                        taskExists = true;
                    }
                    
                }
            }
            if(taskExists){
                alert("A task with this title already appears in this project.  Please change the title.");
                event.preventDefault();
                event.stopImmediatePropagation();
            }else{
                let originalTaskTitle = task.getTitle();
                // set title
                task.setTitle(form.title.value);
                // set description
                task.setDescription(form.description.value);
                // set due date
                task.setDueDate(form.dueDate.value);
                // set priority
                task.setPriority(form.priority.value);
                Storage.editTask(projectTitle, originalTaskTitle, task);
                modalDiv.style.display="none";
                UILoad.loadProject(form.project.value);
                event.preventDefault();
                event.stopImmediatePropagation();
            }
            
        });
    }
    
    static createAddProjectModal(){
        let modalDiv = document.getElementById("projectModal");
        if(modalDiv!=null && modalDiv!=""){
            modalDiv.remove();
        }
        modalDiv = document.createElement("div");
        modalDiv.id = "projectModal";
        modalDiv.innerHTML = `<div class="modal-content"><span class="close">&times;</span><h2 id="addProjectHeading">Add Project</h2>
        <form action="#" method="post" id="addProjectForm"><div id="addProjFormFields">
        <label for="Title">Title:</label><input type="text" id="title" required/>
        <input type="submit" value="Submit" id="submitNewProject"></form></div></div>`;
        content.appendChild(modalDiv);            
        
        let span = document.getElementsByClassName("close")[0];
        span.onclick = function() {
            modalDiv.remove();
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
            <input type="hidden" id="project" name="project" value="`+project.getTitle()+`">
            <br></div><input type="submit" value="Submit"></form></div>`;
            content.appendChild(modalDiv);            
        }else{
            modalDiv.style.display="block";
            let form = document.getElementById("addTaskForm");
            form.project.value = project.getTitle();
            form.reset();
        }
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function() {
            modalDiv.remove();
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
                let task = new Task(form.title.value, form.description.value, form.priority.value, form.dueDate.value, false);
                Storage.addTask(task, form.project.value);
                modalDiv.style.display="none";
                UILoad.loadProject(form.project.value);
                event.preventDefault();
                event.stopImmediatePropagation();
            }
            
        });

    }
}