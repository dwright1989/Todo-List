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
        nav.innerHTML = "This is the navigation panel"; // TO BE CHANGED
        return nav;
    }

    static loadMainContent(){
        let mainContent = document.createElement("div");
        mainContent.id = "mainContent";
        mainContent.innerHTML = "This is the main content where the tasks go"; // TO BE CHANGED
        return mainContent;
    }
    
}