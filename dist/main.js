(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n}\n  \n:root{\n    --main-color: \t#481317;\n    --secondary-color: #dfe0a1;\n    --colorOne: #770e07;\n    --colorTwo: #b24800;\n    --colorThree: #e48f33;\n}\n\n#content{\n    display:grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 5fr;\n}\n\n/*--------BANNER---------*/\n\n#banner{\n    background-color: var(--main-color);\n    color: var(--secondary-color);\n    text-align: right;\n    grid-area: 1/1/2/5;\n}\n\n/*--------NAVIGATION---------*/\n\n#nav{\n    background-color: var(--colorOne);\n    color: var(--secondary-color);\n    grid-area: 2/1/6/2;\n    padding: 5rem;\n}\n\n#nav a{\n    color: var(--secondary-color);\n    text-decoration: none;\n}\n\n#projects{\n    padding-top: 0.5rem;\n    padding-left: 1rem;\n    display: grid;\n    gap: 0.5rem;\n}\n\n/*--------MAIN---------*/\n\n#mainContent{\n    background-color: var(--secondary-color);\n    color: var(--main-color);\n    grid-area: 2/2/6/5;\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    grid-template-rows: 1fr 1fr 5fr;\n}\n\n#mainContentHeading{\n    grid-area:1/1/3/3;\n    padding: 2rem;\n}\n\n#tasks{\n    grid-area: 3/1/7/3;\n    margin: auto;\n    width: 80%;\n    padding-bottom: 3rem;\n}\n\n#key{\n    grid-area: 1/2/2/3;\n}\n\n.low{\n    color: green;\n}\n\n.medium{\n    color: orange;\n}\n\n.high{\n    color: red;\n}\n\n/*--------MODALS---------*/\n#projectModal{\n    position: fixed; \n    z-index: 1; \n    left: 0;\n    top: 0;\n    width: 100%; \n    height: 100%; \n    overflow: auto; \n}\n\n.modal-content{\n    background-color: var(--secondary-color);\n    margin: 15% auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid var(--main-color);\n    border-radius: 5px;\n    width: 25rem;\n    box-shadow: 5px 5px 5px var(--main-color); \n}\n\n  /* The Close Button */\n  .close {\n    color: var(--main-color);\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n  }\n  \n  .close:hover,\n  .close:focus {\n    color: var(--tertiary-color);\n    text-decoration: none;\n    cursor: pointer;\n  }\n\n/*--------TASKS---------*/\n.task{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 2fr 1fr;\n    border: 1px solid black;\n   \n}\n\n.deleteTask{\n    grid-area: 1/2/2/3;\n    width: 10%;\n}\n\n.description{\n    grid-area: 2/1/3/3;\n    border-top: 1px solid black;\n}\n\n.complete{\n    text-decoration: line-through;\n}",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);r&&i[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var d=e[s],l=r.base?d[0]+r.base:d[0],c=a[l]||0,p="".concat(l," ").concat(c);a[l]=c+1;var u=n(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=o(m,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var d=r(e,o),l=0;l<a.length;l++){var c=n(a[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),s=n.n(a),d=n(565),l=n.n(d),c=n(216),p=n.n(c),u=n(589),m=n.n(u),h=n(426),g={};g.styleTagTransform=m(),g.setAttributes=l(),g.insert=s().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=p(),t()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;class f{constructor(){this.projects=[]}addProject(e){this.projects.push(e)}setProjects(e){this.projects=e}getProjects(){return this.projects}getProject(e){for(i=0;i<this.projects.length;i++)if(projects[i].getTitle()==e)return projects[i]}static removeTask(e){}}class v{constructor(e){this.title=e,this.tasks=[]}setTitle(e){this.title=e}getTitle(){return this.title}addTask(e){this.tasks.push(e)}getTasks(){return this.tasks}removeTask(e){}getPriorityTasks(e){}}class y{constructor(e,t,n,r,o){this.title=e,this.description=t,this.priority=n,this.dueDate=r,this.isComplete=o}setTitle(e){this.title=e}getTitle(){return this.title}setDescription(e){this.description=e}getDescription(){return this.description}setPriority(e){this.priority=e}getPriority(){return this.priority}setDueDate(e){this.dueDate=e}getDueDate(){return this.dueDate}setIsComplete(e){this.isComplete=null!=e&&""!=e&&e}getIsComplete(){return null!=this.isComplete&&""!=this.isComplete&&this.isComplete}}class k{static saveList(e){localStorage.setItem("list",JSON.stringify(e))}static getList(){const e=Object.assign(new f,JSON.parse(localStorage.getItem("list")));return e.setProjects(e.getProjects().map((e=>Object.assign(new v,e)))),e}static addProject(e){const t=k.getList();t.addProject(e),k.saveList(t)}}class T{static loadFullPage(){let e=document.getElementById("content");null!=e.innerHTML&&""!=e.innerHTML&&(e.innerHTML="");let t=T.loadBanner(),n=T.loadNavigation(),r=T.loadMainContent();e.appendChild(t),e.appendChild(n),e.appendChild(r);let o=T.loadProjects();for(let e=0;e<o.length;e++){let t=o[e].getTasks();this.displayTasks(t)}}static loadBanner(){let e=document.createElement("div");e.id="banner";let t=document.createElement("h1");return t.id="heading",t.innerHTML="My Projects",e.appendChild(t),e}static loadNavigation(){let e=document.createElement("div");e.id="nav";let t=document.createElement("p");t.id="homeButton",t.innerHTML="Home",e.appendChild(t),t.addEventListener("click",(function(){T.loadFullPage()}));let n=document.createElement("div");n.id="projects";let r=T.loadProjects();for(var o=0;o<r.length;o++){let e=document.createElement("a");e.classList.add("project-link"),e.id="project"+r[o].getTitle(),e.innerHTML=r[o].getTitle(),e.addEventListener("click",(function(){T.loadProject(this.innerHTML)})),n.appendChild(e)}let a=document.createElement("a");return a.id="add-project",a.innerHTML="+ Add Project",a.addEventListener("click",(function(){T.createAddProjectModal()})),n.appendChild(a),e.appendChild(n),e}static loadMainContent(){let e=document.createElement("div");e.id="mainContent";let t=document.createElement("h2");t.innerHTML="Home",t.id="mainContentHeading",e.appendChild(t);let n=document.createElement("div");n.id="key",n.innerHTML='<h3>Priority Key</h3><span class="low">Low </span><span class="medium">Medium </span><span class="high">High</span>',e.appendChild(n);let r=document.createElement("div");return r.id="tasks",e.appendChild(r),e}static loadProject(e){let t=this.loadProjects(),n="";for(let r=0;r<t.length;r++)t[r].getTitle()==e&&(n=t[r]);document.getElementById("tasks").innerHTML="";let r=n.getTasks();this.displayTasks(r)}static displayTasks(e){let t=document.getElementById("tasks");for(let n=0;n<e.length;n++){let r=document.createElement("div");r.classList.add("task");let o=document.createElement("div");o.classList.add("title"),o.innerHTML=e[n].getTitle();let a=document.createElement("div");a.classList.add("description"),a.innerHTML=e[n].getDescription();let i=document.createElement("div");i.classList.add("dueDate"),i.classList.add(e[n].getPriority()),i.innerHTML=e[n].getDueDate();let s=document.createElement("div");s.classList.add("isComplete"),s.innerHTML="Complete:";let d=document.createElement("input");d.setAttribute("type","checkbox"),d.addEventListener("change",(function(){this.checked?(e[n].setIsComplete(!0),r.classList.add("complete")):(e[n].setIsComplete(!1),r.classList.remove("complete"))})),s.appendChild(d);let l=document.createElement("div");l.classList.add("deleteTask"),l.innerHTML="Delete Task",l.addEventListener("click",(function(){console.log("delete button clicked")})),r.appendChild(o),r.appendChild(l),r.appendChild(a),r.appendChild(i),r.appendChild(s),t.appendChild(r)}}static loadProjects(){let e=new v("Work"),t=new y("task 1","this is task one in work","low",new Date);e.addTask(t);let n=new y("task 2","this is task two in work","high",new Date);e.addTask(n);let r=new y("task 3","this is task three in work","low",new Date);e.addTask(r);let o=new v("Home"),a=new y("task one","this is task one in home","medium",new Date);o.addTask(a);let i=new y("task two","this is task two in home","low",new Date);o.addTask(i);let s=new v("School"),d=new y("task I","this is task one in School","high",new Date);s.addTask(d);let l=new f;return console.log("list: "+l),l.addProject(e),l.addProject(o),l.addProject(s),l.getProjects()}static createAddProjectModal(){let e=document.getElementById("projectModal");null==e||""==e?(e=document.createElement("div"),e.id="projectModal",e.innerHTML='<div class="modal-content"><span class="close">&times;</span><h2>Add Project</h2><form action="#" method="post" id="addProjectForm"><div id="formFields"><label for="Title">Title:</label><input type="text" id="title" required></div><button type="button" id="submitBtn"">Add</button></form></div>',content.appendChild(e)):e.style.display="block",document.getElementsByClassName("close")[0].onclick=function(){e.style.display="none"},document.getElementById("submitBtn").addEventListener("click",(function(){let e=new v(this.form.title.value);k.addProject(e)}))}}T.loadFullPage()})()})();