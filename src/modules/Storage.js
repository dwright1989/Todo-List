

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
        Storage.saveList(list);
        UILoad.loadNavigation();
    }

    static deleteTask(task, projectTitle){
      const list = Storage.getList();
      list.getProject(projectTitle).removeTask(task);
      // Does task need to be deleted from any other projects
      let projects = list.getProjects();
      for(let i=0; i<projects.length; i++){
        let tasks = projects[i].getTasks();
        for(let j=0; j<tasks.length; j++){
          if(tasks[j].getTitle().toLowerCase == task.getTitle().toLowerCase){
            projects[i].removeTask(task);
          }
        }
      }
      Storage.saveList(list);
      UILoad.loadNavigation();
    }

    static editTask(projectName, oldTaskTitle, newTask){
        const list = Storage.getList();
        let theProject = list.getProject(projectName)
        let tasks = theProject.getTasks();
        for(let i=0; i<tasks.length; i++){
          if(tasks[i].getTitle()==oldTaskTitle){
            theProject.replaceTask(tasks[i], newTask);
          }
        }
        Storage.saveList(list);
        UILoad.loadNavigation();
    }

    static setTaskCompleted(projectTitle, task, isComplete) {
      const list = Storage.getList();
      list.getProject(projectTitle).getTask(task).setIsComplete(isComplete);
      Storage.saveList(list);
    }




}