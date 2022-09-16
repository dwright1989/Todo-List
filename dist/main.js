(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(81),r=n.n(a),i=n(645),o=n.n(i)()(r());o.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n}\n  \n:root{\n    --main-color: \t#481317;\n    --secondary-color: #dfe0a1;\n    --colorOne: #770e07;\n    --colorTwo: #b24800;\n    --colorThree: #e48f33;\n}\n\n#content{\n    display:grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 5fr;\n}\n\n/*--------BANNER---------*/\n\n#banner{\n    background-color: var(--main-color);\n    color: var(--secondary-color);\n    text-align: right;\n    grid-area: 1/1/2/5;\n}\n\n/*--------NAVIGATION---------*/\n\n#nav{\n    background-color: var(--colorOne);\n    color: var(--secondary-color);\n    grid-area: 2/1/6/2;\n    padding: 5rem;\n}\n\n#nav a{\n    color: var(--secondary-color);\n    text-decoration: none;\n}\n\n#projects{\n    padding-top: 0.5rem;\n    padding-left: 1rem;\n    display: grid;\n    gap: 0.5rem;\n}\n\n/*--------MAIN---------*/\n\n#mainContent{\n    background-color: var(--secondary-color);\n    color: var(--main-color);\n    grid-area: 2/2/6/5;\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    grid-template-rows: 1fr 1fr 5fr;\n}\n\n#mainContentHeading{\n    grid-area:1/1/3/3;\n    padding: 2rem;\n}\n\n#tasks{\n    grid-area: 3/1/7/3;\n    margin: auto;\n    width: 80%;\n    padding-bottom: 3rem;\n}\n\n#key{\n    grid-area: 1/2/2/3;\n}\n\n.low{\n    color: green;\n}\n\n.medium{\n    color: orange;\n}\n\n.high{\n    color: red;\n}\n\n#addTask{\n    grid-area: 2/2/3/3;\n}\n\n/*--------MODALS---------*/\n#projectModal, #taskModal{\n    position: fixed; \n    z-index: 1; \n    left: 0;\n    top: 0;\n    width: 100%; \n    height: 100%; \n    overflow: auto; \n}\n\n.modal-content{\n    background-color: var(--secondary-color);\n    margin: 15% auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid var(--main-color);\n    border-radius: 5px;\n    width: 25rem;\n    box-shadow: 5px 5px 5px var(--main-color); \n}\n\n  /* The Close Button */\n  .close {\n    color: var(--main-color);\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n  }\n  \n  .close:hover,\n  .close:focus {\n    color: var(--tertiary-color);\n    text-decoration: none;\n    cursor: pointer;\n  }\n\n/*--------TASKS---------*/\n.task{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 2fr 1fr;\n    border: 1px solid black;\n   \n}\n\n.deleteTask{\n    grid-area: 1/2/2/3;\n    width: 10%;\n}\n\n.description{\n    grid-area: 2/1/3/3;\n    border-top: 1px solid black;\n}\n\n.complete{\n    text-decoration: line-through;\n}",""]);const s=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(a)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(o[l]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);a&&o[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var i={},o=[],s=0;s<e.length;s++){var l=e[s],d=a.base?l[0]+a.base:l[0],c=i[d]||0,p="".concat(d," ").concat(c);i[d]=c+1;var u=n(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var g=r(m,a);a.byIndex=s,t.splice(s,0,{identifier:p,updater:g,references:1})}o.push(p)}return o}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=a(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var s=n(i[o]);t[s].references--}for(var l=a(e,r),d=0;d<i.length;d++){var c=n(i[d]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}i=l}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var i=t[a]={id:a,exports:{}};return e[a](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),a=n(795),r=n.n(a),i=n(569),o=n.n(i),s=n(565),l=n.n(s),d=n(216),c=n.n(d),p=n(589),u=n.n(p),m=n(426),g={};g.styleTagTransform=u(),g.setAttributes=l(),g.insert=o().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=c(),t()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;class h{constructor(e){this.title=e,this.tasks=[]}setTitle(e){this.title=e}getTitle(){return this.title}addTask(e){this.tasks.push(e)}getTasks(){return this.tasks}removeTask(e){let t=this.tasks;for(let n=0;n<t.length;n++)t[n].getTitle().toLowerCase()==e.getTitle().toLowerCase()&&t.splice(n,1)}setTasks(e){this.tasks=e}getPriorityTasks(e){}}class f{constructor(e,t,n,a,r){this.title=e,this.description=t,this.priority=n,this.dueDate=a,this.isComplete=r}setTitle(e){this.title=e}getTitle(){return this.title}setDescription(e){this.description=e}getDescription(){return this.description}setPriority(e){this.priority=e}getPriority(){return this.priority}setDueDate(e){this.dueDate=e}getDueDate(){return this.dueDate}setIsComplete(e){this.isComplete=null!=e&&""!=e&&e}getIsComplete(){return null!=this.isComplete&&""!=this.isComplete&&this.isComplete}}class v{constructor(){this.projects=[]}addProject(e){this.projects.push(e)}setProjects(e){this.projects=e}getProject(e){let t=this.projects.length;for(let n=0;n<t;n++)if(this.projects[n].getTitle().toLowerCase()==e.toLowerCase())return this.projects[n]}getProjects(){return this.projects}static removeTask(e){}}class y{static saveList(e){localStorage.setItem("list",JSON.stringify(e))}static getList(){const e=Object.assign(new v,JSON.parse(localStorage.getItem("list")));return e.setProjects(e.getProjects().map((e=>Object.assign(new h,e)))),e.getProjects().forEach((e=>e.setTasks(e.getTasks().map((e=>Object.assign(new f,e)))))),e}static addProject(e){const t=y.getList();t.addProject(e),y.saveList(t)}static addTask(e,t){const n=y.getList();n.getProject(t).addTask(e),y.saveList(n)}static deleteTask(e,t){const n=y.getList();n.getProject(t).removeTask(e),y.saveList(n)}}class T{static loadFullPage(){let e=document.getElementById("content");null!=e.innerHTML&&""!=e.innerHTML&&(e.innerHTML="");let t=T.loadBanner(),n=T.loadNavigation(),a=T.loadMainContent();e.appendChild(t),e.appendChild(n),e.appendChild(a)}static loadBanner(){let e=document.createElement("div");e.id="banner";let t=document.createElement("h1");return t.id="heading",t.innerHTML="My Projects",e.appendChild(t),e}static loadNavigation(){let e=document.createElement("div");e.id="nav";let t=document.createElement("p");t.id="homeButton",t.innerHTML="Home",e.appendChild(t),t.addEventListener("click",(function(){T.loadFullPage()}));let n=document.createElement("div");n.id="projects";let a=y.getList().getProjects();for(var r=0;r<a.length;r++){let e=document.createElement("a");e.classList.add("project-link"),e.id="project"+a[r].getTitle(),e.innerHTML=a[r].getTitle(),e.addEventListener("click",(function(){T.loadProject(this.innerHTML)})),n.appendChild(e)}let i=document.createElement("a");return i.id="add-project",i.innerHTML="+ Add Project",i.addEventListener("click",(function(){T.createAddProjectModal()})),n.appendChild(i),e.appendChild(n),e}static loadMainContent(){let e=document.createElement("div");e.id="mainContent";let t=document.createElement("h2");t.innerHTML="Home",t.id="mainContentHeading",e.appendChild(t);let n=document.createElement("div");n.id="key",n.innerHTML='<h3>Priority Key</h3><span class="low">Low </span><span class="medium">Medium </span><span class="high">High</span>',e.appendChild(n);let a=document.createElement("div");a.id="addTask",e.appendChild(a);let r=document.createElement("div");return r.id="tasks",e.appendChild(r),e}static loadProject(e){let t=y.getList().getProjects(),n="";for(let a=0;a<t.length;a++)t[a].getTitle()==e&&(n=t[a]);document.getElementById("tasks").innerHTML="",this.displayTasks(n),document.getElementById("mainContentHeading").innerHTML=e;let a=document.getElementById("addTask");a.innerHTML="";let r=document.createElement("button");r.id="addTaskBtn",r.innerHTML="Add Task",r.addEventListener("click",(function(){T.createAddTaskModal(n)})),a.appendChild(r)}static displayTasks(e){let t=e.getTasks();console.log("tasks "+JSON.stringify(t));let n=document.getElementById("tasks");if(0==t.length)n.innerHTML="No tasks exist in this project yet.";else for(let a=0;a<t.length;a++){console.log("the task: "+JSON.stringify(t[a]));let r=document.createElement("div");r.classList.add("task");let i=document.createElement("div");i.classList.add("title"),i.innerHTML=t[a].getTitle();let o=document.createElement("div");o.classList.add("description"),o.innerHTML=t[a].getDescription();let s=document.createElement("div");s.classList.add("dueDate"),s.classList.add(t[a].getPriority()),s.innerHTML=t[a].getDueDate();let l=document.createElement("div");l.classList.add("isComplete"),l.innerHTML="Complete:";let d=document.createElement("input");d.setAttribute("type","checkbox"),d.addEventListener("change",(function(){this.checked?(t[a].setIsComplete(!0),r.classList.add("complete")):(t[a].setIsComplete(!1),r.classList.remove("complete"))})),l.appendChild(d);let c=document.createElement("div");c.classList.add("deleteTask"),c.innerHTML="Delete Task",c.addEventListener("click",(function(){y.deleteTask(t[a],e.getTitle()),T.loadProject(e.getTitle())})),r.setAttribute("project-name",e.getTitle()),r.appendChild(i),r.appendChild(c),r.appendChild(o),r.appendChild(s),r.appendChild(l),n.appendChild(r)}}static createAddProjectModal(){let e=document.getElementById("projectModal");null==e||""==e?(e=document.createElement("div"),e.id="projectModal",e.innerHTML='<div class="modal-content"><span class="close">&times;</span><h2>Add Project</h2>\n            <form action="#" method="post" id="addProjectForm"><div id="formFields">\n            <label for="Title">Title:</label><input type="text" id="title" required/></div>\n            <input type="submit" value="Submit"></form></div>',content.appendChild(e)):(document.getElementById("addProjectForm").reset(),e.style.display="block"),document.getElementsByClassName("close")[0].onclick=function(){e.style.display="none"};let t=document.getElementById("addProjectForm");t.addEventListener("submit",(n=>{let a=!1,r=y.getList().getProjects();for(let e=0;e<r.length;e++)r[e].getTitle().toLowerCase()==t.title.value.toLowerCase()&&(a=!0);if(a)alert("A task with this project already exists.  Please change the title."),n.preventDefault(),n.stopImmediatePropagation();else{let a=new h(t.title.value);y.addProject(a),e.style.display="none";let r=T.loadNavigation();content.appendChild(r),T.loadProject(a.getTitle()),n.preventDefault(),n.stopImmediatePropagation()}}))}static createAddTaskModal(e){let t=document.getElementById("taskModal");null==t||""==t?(t=document.createElement("div"),t.id="taskModal",t.innerHTML='<div class="modal-content"><span class="close">&times;</span>\n            <h2>Add Task</h2><form action="#" method="post" id="addTaskForm"><div id="formFields">\n            <label for="Title">Title:</label><input type="text" id="title" required/>\n            Description:<textarea name="description" form="addTaskForm" required></textarea>\n            Priority: <input type="radio" id="low" name="priority" value="low" checked><label for="low">Low</label><br>\n            <input type="radio" id="medium" name="priority" value="medium"><label for="medium">Medium</label><br>\n            <input type="radio" id="high" name="priority" value="high"><label for="high">High</label>\n            <label for="dueDate">Date Due:</label><br><input type="date" id="dueDate" name="dueDate">\n            <br></div><input type="submit" value="Submit"></form></div>',content.appendChild(t)):(t.style.display="block",document.getElementById("addTaskForm").reset()),document.getElementsByClassName("close")[0].onclick=function(){t.style.display="none"};let n=document.getElementById("addTaskForm");n.addEventListener("submit",(a=>{let r=!1,i=y.getList().getProject(e.getTitle()).getTasks();for(let e=0;e<i.length;e++)i[e].getTitle().toLowerCase()==n.title.value.toLowerCase()&&(r=!0);if(r)alert("A task with this title already appears in this project.  Please change the title."),a.preventDefault(),a.stopImmediatePropagation();else{let r=new f(n.title.value,n.description.value,n.priority.value,n.dueDate.value);y.addTask(r,e.getTitle()),t.style.display="none",T.loadProject(e.getTitle()),a.preventDefault(),a.stopImmediatePropagation()}}))}}T.loadFullPage()})()})();