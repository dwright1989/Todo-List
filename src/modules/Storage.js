

import Project from './Project';
import Task from './Task';
import List from './List';
import { compareAsc, format, endOfWeek } from 'date-fns';
import UILoad from './UILoad';

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
        
        // Does task need to be added to any other projects
        if(projectTitle!="Today" && projectTitle!="This Week"){
          console.log("the project is not today or this week");
          let today = format(new Date(), 'yyyy-MM-dd');
          if(task.getDueDate()==today){
            console.log("the due date is equal to today. About to add to the today project");
            // Add to today project
            list.getProject("Today").addTask(task);
          }
          let end = endOfWeek(new Date(), {weekStartsOn: 1});
          if(Date.parse(task.getDueDate())<Date.parse(end)){
            console.log("the due date is this week. About to add to the this week project");
            // Add to this week project
            list.getProject("This Week").addTask(task);
          }
        }
        Storage.saveList(list);
        UILoad.loadNavigation();
    }

    static deleteTask(task, projectTitle){
      const list = Storage.getList();
      list.getProject(projectTitle).removeTask(task);
      Storage.saveList(list);
      UILoad.loadNavigation();
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
      Storage.saveList(list);
      for(let i=0; i<projects.length; i++){
        
         let tasks = projects[i].getTasks();
         if(projects[i].getTitle()!="Today" && projects[i].getTitle()!="This Week"){
            for(let j=0; j<tasks.length; j++){
              let dueDate = tasks[j].getDueDate();
              if(dueDate==today){
                console.log("We are adding task: " + tasks[j].getTitle() + " from project: " + projects[i].getTitle());
                todayProject.addTask(tasks[j]);
              }
            }
         }
         
      }
      
      Storage.saveList(list);
      return todayProject;


    }

    static loadWeeklyTasks(){
      const list = Storage.getList();
      let projects = list.getProjects();
      // Get end of the week
      let today = format(new Date(), 'yyyy-MM-dd');
      let end = endOfWeek(new Date(), {weekStartsOn: 1});
      // Check if today project exists
      let thisWeekProject = list.getProject("This Week");
      
      if(thisWeekProject==null || thisWeekProject == ""){
        thisWeekProject = new Project("This Week");
        list.addProject(thisWeekProject);
      }

      thisWeekProject.setTasks([]);
      //let thisWeekProject = Storage.getList().getProject("This Week");
      
      for(let i=0; i<projects.length; i++){
        
         let tasks = projects[i].getTasks();
         if(projects[i].getTitle()!="This Week"){
            for(let j=0; j<tasks.length; j++){
              let dueDate = tasks[j].getDueDate();
              if(Date.parse(dueDate)<Date.parse(end)){
                thisWeekProject.addTask(tasks[j]);
              }
            }
         }
         
      }
      
      Storage.saveList(list);
      return thisWeekProject;


    }


}