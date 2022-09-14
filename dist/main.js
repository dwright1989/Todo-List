(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),i=n.n(r),a=n(645),o=n.n(a)()(i());o.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n}\n  \n:root{\n    --main-color: \t#481317;\n    --secondary-color: #dfe0a1;\n    --colorOne: #770e07;\n    --colorTwo: #b24800;\n    --colorThree: #e48f33;\n}\n\n#content{\n    display:grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 5fr;\n}\n\n/*--------BANNER---------*/\n\n#banner{\n    background-color: var(--main-color);\n    color: var(--secondary-color);\n    text-align: right;\n    grid-area: 1/1/2/5;\n}\n\n/*--------NAVIGATION---------*/\n\n#nav{\n    background-color: var(--colorOne);\n    color: var(--secondary-color);\n    grid-area: 2/1/6/2;\n    padding: 5rem;\n}\n\n#nav a{\n    color: var(--secondary-color);\n    text-decoration: none;\n}\n\n#projects{\n    padding-top: 0.5rem;\n    padding-left: 1rem;\n    display: grid;\n    gap: 0.5rem;\n}\n\n/*--------MAIN---------*/\n\n#mainContent{\n    background-color: var(--secondary-color);\n    color: var(--main-color);\n    grid-area: 2/2/6/5;\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    grid-template-rows: 1fr 1fr 5fr;\n}\n\n#mainContentHeading{\n    grid-area:1/1/3/3;\n    padding: 2rem;\n}\n\n#tasks{\n    grid-area: 3/1/7/3;\n    margin: auto;\n    width: 80%;\n    padding-bottom: 3rem;\n}\n\n#key{\n    grid-area: 1/2/2/3;\n}\n\n.low{\n    color: green;\n}\n\n.medium{\n    color: orange;\n}\n\n.high{\n    color: red;\n}\n\n/*--------TASKS---------*/\n.task{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 2fr 1fr;\n    border: 1px solid black;\n   \n}\n\n.deleteTask{\n    grid-area: 1/2/2/3;\n    width: 10%;\n}\n\n.description{\n    grid-area: 2/1/3/3;\n    border-top: 1px solid black;\n}\n\n.complete{\n    text-decoration: line-through;\n}",""]);const s=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(o[d]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);r&&o[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},o=[],s=0;s<e.length;s++){var d=e[s],l=r.base?d[0]+r.base:d[0],c=a[l]||0,p="".concat(l," ").concat(c);a[l]=c+1;var u=n(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=i(m,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:h,references:1})}o.push(p)}return o}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var a=r(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var s=n(a[o]);t[s].references--}for(var d=r(e,i),l=0;l<a.length;l++){var c=n(a[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),o=n(569),s=n.n(o),d=n(565),l=n.n(d),c=n(216),p=n.n(c),u=n(589),m=n.n(u),h=n(426),g={};g.styleTagTransform=m(),g.setAttributes=l(),g.insert=s().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),t()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;class f{constructor(){this.projects=[]}addProject(e){this.projects.push(e)}setProjects(e){this.projects=e}getProjects(){return this.projects}getProject(e){for(i=0;i<this.projects.length;i++)if(projects[i].getTitle()==e)return projects[i]}static removeTask(e){}}class v{constructor(e){this.title=e,this.tasks=[]}setTitle(e){this.title=e}getTitle(){return this.title}addTask(e){this.tasks.push(e)}getTasks(){return this.tasks}removeTask(e){}getPriorityTasks(e){}}class k{constructor(e,t,n,r,i){this.title=e,this.description=t,this.priority=n,this.dueDate=r,this.isComplete=i}setTitle(e){this.title=e}getTitle(){return this.title}setDescription(e){this.description=e}getDescription(){return this.description}setPriority(e){this.priority=e}getPriority(){return this.priority}setDueDate(e){this.dueDate=e}getDueDate(){return this.dueDate}setIsComplete(e){this.isComplete=null!=e&&""!=e&&e}getIsComplete(){return null!=this.isComplete&&""!=this.isComplete&&this.isComplete}}class T{static loadFullPage(){let e=document.getElementById("content"),t=T.loadBanner(),n=T.loadNavigation(),r=T.loadMainContent();e.appendChild(t),e.appendChild(n),e.appendChild(r)}static loadBanner(){let e=document.createElement("div");e.id="banner";let t=document.createElement("h1");return t.id="heading",t.innerHTML="My Projects",e.appendChild(t),e}static loadNavigation(){let e=document.createElement("div");e.id="nav";let t=document.createElement("p");t.id="homeButton",t.innerHTML="Home",e.appendChild(t),t.addEventListener("click",(function(){T.loadMainContent()}));let n=document.createElement("div");n.id="projects";let r=T.loadProjects();for(var i=0;i<r.length;i++){let e=document.createElement("a");e.classList.add("project-link"),e.id="project"+r[i].getTitle(),e.innerHTML=r[i].getTitle(),e.addEventListener("click",(function(){T.loadProject(this.innerHTML)})),n.appendChild(e)}let a=document.createElement("a");return a.id="add-project",a.innerHTML="+ Add Project",n.appendChild(a),e.appendChild(n),e}static loadMainContent(){let e=document.createElement("div");e.id="mainContent";let t=document.createElement("h2");t.innerHTML="Home",t.id="mainContentHeading",e.appendChild(t);let n=document.createElement("div");n.id="key",n.innerHTML='<h3>Priority Key</h3><span class="low">Low </span><span class="medium">Medium </span><span class="high">High</span>',e.appendChild(n);let r=document.createElement("div");r.id="tasks";let i=T.loadProjects();for(let e=0;e<i.length;e++){let t=i[e].getTasks();for(let n=0;n<t.length;n++){let a=document.createElement("div");a.id="project:"+i[e].getTitle()+".task:"+t[n].getTitle(),a.classList.add("task");let o=document.createElement("div");o.classList.add("title"),o.innerHTML=t[n].getTitle();let s=document.createElement("div");s.classList.add("description"),s.innerHTML=t[n].getDescription();let d=document.createElement("div");d.classList.add("dueDate"),d.classList.add(t[n].getPriority()),d.innerHTML=t[n].getDueDate();let l=document.createElement("div");l.classList.add("isComplete"),l.innerHTML="Complete:";let c=document.createElement("input");c.setAttribute("type","checkbox"),c.addEventListener("change",(function(){this.checked?(t[n].setIsComplete(!0),a.classList.add("complete")):(t[n].setIsComplete(!1),a.classList.remove("complete"))})),l.appendChild(c);let p=document.createElement("div");p.classList.add("deleteTask"),p.innerHTML="Delete Task",p.addEventListener("click",(function(){console.log("delete button clicked")})),a.appendChild(o),a.appendChild(p),a.appendChild(s),a.appendChild(d),a.appendChild(l),r.appendChild(a)}}return e.appendChild(r),e}static loadProject(e){let t=this.loadProjects(),n="";for(let r=0;r<t.length;r++)t[r].getTitle()==e&&(n=t[r]);let r=document.getElementById("tasks");r.innerHTML="";let i=n.getTasks();for(let e=0;e<i.length;e++){let t=document.createElement("div");t.id="project:"+n.getTitle()+".task:"+i[e].getTitle(),t.classList.add("task");let a=document.createElement("div");a.classList.add("title"),a.innerHTML=i[e].getTitle();let o=document.createElement("div");o.classList.add("description"),o.innerHTML=i[e].getDescription();let s=document.createElement("div");s.classList.add("dueDate"),s.classList.add(i[e].getPriority()),s.innerHTML=i[e].getDueDate();let d=document.createElement("div");d.classList.add("isComplete"),d.innerHTML="Complete:";let l=document.createElement("input");l.setAttribute("type","checkbox"),l.addEventListener("change",(function(){this.checked?(i[e].setIsComplete(!0),t.classList.add("complete")):(i[e].setIsComplete(!1),t.classList.remove("complete"))})),d.appendChild(l);let c=document.createElement("div");c.classList.add("deleteTask"),c.innerHTML="Delete Task",c.addEventListener("click",(function(){console.log("delete button clicked")})),t.appendChild(a),t.appendChild(c),t.appendChild(o),t.appendChild(s),t.appendChild(d),r.appendChild(t)}}static loadProjects(){let e=new v("Work"),t=new k("task 1","this is task one in work","low",new Date);e.addTask(t);let n=new k("task 2","this is task two in work","high",new Date);e.addTask(n);let r=new k("task 3","this is task three in work","low",new Date);e.addTask(r);let i=new v("Home"),a=new k("task one","this is task one in home","medium",new Date);i.addTask(a);let o=new k("task two","this is task two in home","low",new Date);i.addTask(o);let s=new v("School"),d=new k("task I","this is task one in School","high",new Date);s.addTask(d);let l=new f;return console.log("list: "+l),l.addProject(e),l.addProject(i),l.addProject(s),l.getProjects()}}T.loadFullPage()})()})();