

import Project from './Project'
import Task from './Task'
import List from './List'

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

}