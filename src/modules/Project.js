export default class Project{
    construction(title){
        this.title = title;
        this.tasks = [];
    }

    setTitle(title){
        this.title = title;
    }

    getTitle(){
        return this.title;
    }

    addTask(task){
        this.tasks.push(task);
    }

    getTasks(){
        return this.tasks;
    }

    /*
    Get the tasks based on the priority level (low, medium, high)
    */
    getPriorityTasks(priorityLevel){

    }
}