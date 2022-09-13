import Project from './Project';


export default class List{
    constructor(){
        this.projects = [];
    }



    addProject(project){
        this.projects.push(project);
    }

    setProjects(projects) {
        this.projects = projects;
    }
    

    getProjects(){
        return this.projects;
    }

    static removeTask(project){
        // find the project in the array and remove
    }

}