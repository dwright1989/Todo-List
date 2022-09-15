export default class Task{
    constructor(title, description, priority, dueDate, isComplete){
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
        this.isComplete = isComplete;
    }

    setTitle(title){
        this.title = title;
    }

    getTitle(){
        console.log("this");
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

    setIsComplete(isComplete){
        if(isComplete==null || isComplete==""){
            this.isComplete = false;
        }else{
            this.isComplete = isComplete;
        }
    }

    getIsComplete(){
        if(this.isComplete==null || this.isComplete==""){
            return false;
        }else{
            return this.isComplete;
        }
    }
}