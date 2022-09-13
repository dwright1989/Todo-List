export default class Task{
    constructor(title, description, priority, dueDate){
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
    }

    setTitle(title){
        this.title = title;
    }

    getTitle(){
        return this.title;
    }

    setDescription(description){
        this.description = description;
    }

    getDescription(){
        return this.description;
    }

    setPriority(priority){
        this.priority = priority;
    }

    getPriority(){
        return this.priority;
    }

    setDueDate(dueDate){
        this.dueDate = dueDate;
    }

    getDueDate(){
        return this.dueDate;
    }
}