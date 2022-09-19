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
        console.log("in the add tasks");
        console.log("checking if the task exists");
        if(!(this.taskExists(task))){
            console.log("it doesn't");
            this.tasks.push(task);
        }else{
            console.log("it does");
        }
        
    }

    getTasks(){
        return this.tasks;
    }

    removeTask(task){
        // find the task in the array and remove
        let tasks = this.tasks;
        for(let i=0; i<tasks.length; i++){
            if(tasks[i].getTitle().toLowerCase()==task.getTitle().toLowerCase()){
                tasks.splice(i,1);
            }
        }
    }

    setTasks(tasks){
        this.tasks = tasks;
    }

    taskExists(task){
        let exists = false;
        for(let i=0; i<this.tasks.length; i++){
            if(this.tasks[i].getTitle()==task.getTitle()){
                exists = true;
                break;
            }
        }
        return exists;
    }

    /*
    Get the tasks based on the priority level (low, medium, high)
    */
    getPriorityTasks(priorityLevel){

    }
}