

import Project from './Project';
import Task from './Task';
import List from './List';
import { compareAsc, format } from 'date-fns';

export default class Storage {

    static saveList(data) {
        localStorage.setItem('list', JSON.stringify(data))
      }
    
    static getList() {
    const list = Object.assign(new List(), JSON.parse(localStorage.getItem('list')));

    list.setProjects(list.getProjects().map((project) => Object.assign(new Project(), project)));

    list.getProjects().forEach((project) => project.setTasks(project.getTasks().map((task) => Object.assign(new Task(), task))));
        return list
    }

    static addProject(project) {
        const list = Storage.getList();
        list.addProject(project);
        Storage.saveList(list);
      }

    static addTask(task, projectTitle) {
        
        const list = Storage.getList();
        list.getProject(projectTitle).addTask(task);
        Storage.saveList(list);
    }

    static deleteTask(task, projectTitle){
      const list = Storage.getList();
      list.getProject(projectTitle).removeTask(task);
      Storage.saveList(list);
    }

    static loadTodayTasks(){
      const list = Storage.getList();
      let projects = list.getProjects();
      let today = format(new Date(), 'yyyy-MM-dd');
      // Check if today project exists
      let todayProject = list.getProject("Today");
      
      if(todayProject==null || todayProject == ""){
        todayProject = new Project("Today");
        list.addProject(todayProject);
      }

      todayProject.setTasks([]);
      let todayProj = Storage.getList().getProject("Today");
      
      for(let i=0; i<projects.length; i++){
        
         let tasks = projects[i].getTasks();
         console.log("projects: " + JSON.stringify(tasks));
         console.log("tasks: " + tasks.length);
         if(projects[i].getTitle()!="Today"){
            for(let j=0; j<tasks.length; j++){
              let dueDate = tasks[j].getDueDate();
              console.log("This is task: " + j)
              if(dueDate==today){
                todayProject.addTask(tasks[j]);
              }
            }
         }
         
      }
      
      Storage.saveList(list);
      return todayProject;


    }

}