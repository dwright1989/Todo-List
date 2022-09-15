export default class Project{
    constructor(title){
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
        console.log("adding task in project");
        this.tasks.push(task);
    }

    getTasks(){
        return this.tasks;
    }

    removeTask(task){
        // find the task in the array and remove
    }

    setTasks(tasks){
        this.tasks = tasks;
    }

    /*
    Get the tasks based on the priority level (low, medium, high)
    */
    getPriorityTasks(priorityLevel){

    }
}