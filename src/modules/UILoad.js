import List from './List'
import Project from './Project'
import Task from './Task'

export default class UILoad{

    

    static loadFullPage(){
        let content = document.getElementById("content");
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
            UILoad.loadMainContent();
        });

       
        let projectsDiv = document.createElement("div");
        projectsDiv.id = "projects";
        
        

        // Add the projects to the navigation bar
        let projects = UILoad.loadProjects();
        for(var i = 0; i < projects.length; i++){
            let projectLink = document.createElement("a");
            projectLink.classList.add("project-link");
            projectLink.id = "project" + projects[i].getTitle();
            projectLink.innerHTML = projects[i].getTitle();

            // Add event listener to each project link
            projectLink.addEventListener("click", function(){
                UILoad.loadProjectPage(projectLink.id);
            });
            projectsDiv.appendChild(projectLink);
        }

        let addProjectButton = document.createElement("a"); // need to add event listener
        addProjectButton.id = "add-project";
        addProjectButton.innerHTML = "+ Add Project";
        projectsDiv.appendChild(addProjectButton);
        nav.appendChild(projectsDiv);
        return nav;
    }

    static loadProjectPage(projectTitle){
        // TO BE COMPLETED
        let title = projectTitle.split("t").pop();
        console.log(title);
    }

    static loadMainContent(){
        let mainContent = document.createElement("div");
        mainContent.id = "mainContent";
        let heading = document.createElement("h2");
        heading.innerHTML = "Home";
        mainContent.appendChild(heading);
        let tasksDiv = document.createElement("div");
        tasksDiv.id = "tasks";
        
        // get all the tasks (loop through all projects and print their tasks)
        /* TO BE REMOVED */
        let projects = UILoad.loadProjects();
        for(let i=0; i<projects.length; i++){
            let tasks = projects[i].getTasks();
            for(let j=0; j<tasks.length; j++){
                let taskElement = document.createElement("div");
                taskElement.innerHTML = tasks[j].getTitle();
                tasksDiv.appendChild(taskElement);
            }
        }

        /* END TO BE REMOVED */
        mainContent.appendChild(tasksDiv);
        return mainContent;
    }

    static loadProjects(){
        // get the project objects from where they are stored
        /* TO BE REMOVED */
        let project1 = new Project("Work");
        let task1 = new Task("task 1", "this is task one in work", 1, new Date());
        project1.addTask(task1);
        let task2 = new Task("task 2", "this is task two in work", 1, new Date());
        project1.addTask(task2);
        let task3 = new Task("task 3", "this is task three in work", 1, new Date());
        project1.addTask(task3);
        let project2 = new Project("Home");
        let taskOne = new Task("task one", "this is task one in home", 1, new Date());
        project2.addTask(taskOne);
        let taskTwo = new Task("task two", "this is task two in home", 1, new Date());
        project2.addTask(taskTwo);
        let project3 = new Project("School");
        let taskI = new Task("task I", "this is task one in School", 1, new Date());
        project3.addTask(taskI);
        let list = new List();
        console.log("list: " + list);
        list.addProject(project1);
        list.addProject(project2);
        list.addProject(project3);

        /* TO BE REMOVED */
        let projects =  list.getProjects();
        return projects;
    }
    
}