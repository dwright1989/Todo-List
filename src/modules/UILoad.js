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
        nav.innerHTML = '<a href="">Home</a><p>Projects</p>';
        let projectsDiv = document.createElement("div");
        projectsDiv.id = "projects";

        // Add the projects to the navigation bar
        let projects = UILoad.loadProjects();
        for(var i = 0; i < projects.length; i++){
            let projectLink = document.createElement("a");
            projectLink.classList.add("project-link");
            projectLink.innerHTML = projects[i].getTitle();
            projectsDiv.appendChild(projectLink);
        }

        let addProjectButton = document.createElement("a"); // need to add event listener
        addProjectButton.id = "add-project";
        addProjectButton.innerHTML = "+ Add Project";
        projectsDiv.appendChild(addProjectButton);
        nav.appendChild(projectsDiv);
        return nav;
    }

    static loadMainContent(){
        let mainContent = document.createElement("div");
        mainContent.id = "mainContent";
        mainContent.innerHTML = "This is the main content where the tasks go"; // TO BE CHANGED
        return mainContent;
    }

    static loadProjects(){
        // get the project objects from where they are stored
        /* TO BE REMOVED */
        let project1 = new Project("Work");
        let project2 = new Project("Home");
        let project3 = new Project("School");
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