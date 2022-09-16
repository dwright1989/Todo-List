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

    getProject(title){
        let projectsLength = this.projects.length;
        for(let i=0; i<projectsLength; i++){
            let project = this.projects[i];
           if(project.getTitle().toLowerCase()==title.toLowerCase()){
                return this.projects[i];
            }
        }
    }
    

    getProjects(){
        return this.projects;
    }
    static removeTask(project){
        // find the project in the array and remove
    }

}