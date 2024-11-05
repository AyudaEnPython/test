import"./Meta.astro_astro_type_script_index_0_lang.-b7UGIKM.js";const s=new Blob([`
      importScripts("https://cdn.jsdelivr.net/pyodide/v0.26.3/full/pyodide.js");

      async function loadPyodideAndPackages() {
        self.pyodide = await loadPyodide();
        await self.pyodide.loadPackage("micropip");
      }

      let pyodideReadyPromise = loadPyodideAndPackages();

      self.onmessage = async (event) => {
        await pyodideReadyPromise;
        const { pythonCode } = event.data;
        try {
          self.pyodide.runPython(\`
            import sys
            import io
            sys.stdout = io.StringIO()
          \`);
          await self.pyodide.loadPackagesFromImports(pythonCode);
          await self.pyodide.runPythonAsync(pythonCode);
          const output = await self.pyodide.runPythonAsync("sys.stdout.getvalue()");
          self.postMessage({ results: output });
        } catch (error) {
          self.postMessage({ error: error.message });
        }
      };
    `],{type:"application/javascript"});function d(){const i=document.createElement("style");i.textContent=`
    .rb-btn { 
      font-family: monospace; line-height: normal;
      background-color: rgba(23, 23, 23, 0.2); color: #737373;
      border: 1px solid #737373; text-align: center; font-size: 1rem;
      border-radius: 4px; margin-left: 4px; padding: 0 4px 0 4px;
      height: 26px; width: 26px;
    }
    .rb-btn:hover { color: #d4d4d4; border-color: #d4d4d4; }
    .rb-editor { border-radius: 4px; padding: 2px; }
    .rb-container {
      position: relative; background-color: #282828; border-radius: 4px;
      line-height: normal; padding: 0px; margin: 24px 0px;
    }
    .rb-btn-group {
      position: absolute; z-index: 100; top: 4px; right: 4px;
      line-height: 0px;
    }
    .rb-output { margin: 0; padding: 0; color: #fafafa; }
    .rb-output:not(:empty) {
      font-family: monospace; font-size: 0.875rem;
      margin: 4px 32px; padding: 0 0 4px 0;
    }
    .loading {
      display: flex; justify-content: center;
      div {
        width: 0.3rem; height: 0.3rem; margin: 0.4rem 0.3rem;
        background: #fafafa; border-radius: 50%;
        animation: 0.9s bounce infinite alternate;
        &:nth-child(2) { animation-delay: 0.3s; }
        &:nth-child(3) { animation-delay: 0.6s; }
      }
    }
    @keyframes bounce {
      to { opacity: 0.3; transform: translate3d(0, -0.4rem, 0); }
    }
  `,document.head.appendChild(i)}function c(i,t){const e=document.createElement("div");e.classList.add("rb-editor");const n=ace.edit(e);return n.session.setMode("ace/mode/python"),n.setTheme("ace/theme/gruvbox"),n.renderer.setScrollMargin(10,10),n.getSession().selection.on("changeSelection",function(o){n.getSession().selection.clearSelection()}),n.container.style.pointerEvents="none",n.renderer.$cursorLayer.element.style.display="none",n.setValue(t),n.setOptions({readOnly:!0,fontSize:"0.875rem",highlightActiveLine:!1,highlightGutterLine:!1,showFoldWidgets:!1,showGutter:!0,showPrintMargin:!1,minLines:2,maxLines:30}),i.appendChild(e),n}function r(i,t){const e=document.createElement("button");return e.textContent=i,e.classList.add("rb-btn"),e.addEventListener("click",t),e}function l(i,t,e,n){const o=document.createElement("div");o.classList.add("rb-btn-group"),o.appendChild(r("▷",t)),o.appendChild(r("⟳",e)),o.appendChild(r("⧠",n)),i.appendChild(o)}function p(i){const t=document.createElement("div");return t.classList.add("rb-output"),i.appendChild(t),t}class a{constructor(t,e){this.worker=new Worker(URL.createObjectURL(s)),d(),this.container=t,this.container.classList.add("rb-container"),this.editor=c(this.container,e),this.createOutput(),l(this.container,this.runCode.bind(this),this.clearOutput.bind(this),this.copyCode.bind(this))}createOutput(){this.output=p(this.container)}runCode(){this.output.innerHTML='<div class="loading"><div></div><div></div><div></div></div>';const t=this.editor.getValue();this.worker.postMessage({pythonCode:t}),this.worker.onmessage=e=>{const{results:n,error:o}=e.data;this.output.textContent=n||this.handleError(o)}}clearOutput(){this.output.textContent=""}copyCode(){const t=this.editor.getValue();navigator.clipboard.writeText(t).then(()=>{console.log("Code copied to clipboard")}).catch(e=>{console.error("Could not copy text: ",e)})}handleError(t){const e=t.message||t.toString(),n=e.split(`
`);return n[n.length-2]||e}static initialize(){document.querySelectorAll("pre.runnable").forEach(e=>{const n=e.textContent.trim(),o=document.createElement("div");e.replaceWith(o),new a(o,n).editor.clearSelection(!0)})}}document.addEventListener("DOMContentLoaded",()=>{a.initialize()});
