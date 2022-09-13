export default class List{
    construction(){
        this.projects = [];
    }



    addProject(project){
        this.projects.push(project);
    }

    getProjects(){
        return this.projects;
    }

    removeTask(project){
        // find the project in the array and remove
    }

}