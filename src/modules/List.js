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

    getProject(title){
        for(i=0; i<this.projects.length; i++){
            if(projects[i].getTitle()==title){
                return projects[i]
            }
        }
    }

    static removeTask(project){
        // find the project in the array and remove
    }

}