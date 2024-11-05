import"./Meta.astro_astro_type_script_index_0_lang.-b7UGIKM.js";const a=new Blob([`
      importScripts("https://cdn.jsdelivr.net/pyodide/v0.26.3/full/pyodide.js");

      async function loadPyodideAndPackages() {
        self.pyodide = await loadPyodide();
        await self.pyodide.loadPackage("micropip")
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
    `],{type:"application/javascript"});function d(){const r=document.createElement("style");r.textContent=`
    .rb-btn { 
      font-family: monospace; line-height: normal;
      background-color: rgba(23, 23, 23, 0.2); color: #737373;
      border: 1px solid #737373; text-align: center; font-size: 0.875rem;
      border-radius: 4px; margin-left: 4px; padding: 0 4px 0 4px;
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
  `,document.head.appendChild(r)}function c(r,e){const t=document.createElement("div");t.classList.add("rb-editor");const o=ace.edit(t);return o.session.setMode("ace/mode/python"),o.setTheme("ace/theme/gruvbox"),o.renderer.setScrollMargin(10,10),o.setValue(e),o.setOptions({readOnly:!0,fontSize:"0.875rem",highlightActiveLine:!1,highlightGutterLine:!1,showFoldWidgets:!1,showGutter:!0,showPrintMargin:!1,minLines:2,maxLines:30}),r.appendChild(t),o}function i(r,e){const t=document.createElement("button");return t.textContent=r,t.classList.add("rb-btn"),t.addEventListener("click",e),t}function l(r,e,t,o){const n=document.createElement("div");n.classList.add("rb-btn-group"),n.appendChild(i("▷",e)),n.appendChild(i("⟳",t)),n.appendChild(i("⧠",o)),r.appendChild(n)}function p(r){const e=document.createElement("div");return e.classList.add("rb-output"),r.appendChild(e),e}class s{constructor(e,t){this.worker=new Worker(URL.createObjectURL(a)),d(),this.container=e,this.container.classList.add("rb-container"),this.editor=c(this.container,t),this.createOutput(),l(this.container,this.runCode.bind(this),this.clearOutput.bind(this),this.copyCode.bind(this))}createOutput(){this.output=p(this.container)}runCode(){const e=this.editor.getValue();this.worker.postMessage({pythonCode:e}),this.worker.onmessage=t=>{const{results:o,error:n}=t.data;this.output.textContent=o||this.handleError(n)}}clearOutput(){this.output.textContent=""}copyCode(){const e=this.editor.getValue();navigator.clipboard.writeText(e).then(()=>{console.log("Code copied to clipboard")}).catch(t=>{console.error("Could not copy text: ",t)})}handleError(e){const t=e.message||e.toString(),o=t.split(`
`);return o[o.length-2]||t}static initialize(){document.querySelectorAll("pre.runnable").forEach(t=>{const o=t.textContent.trim(),n=document.createElement("div");t.replaceWith(n),new s(n,o).editor.clearSelection(!0)})}}document.addEventListener("DOMContentLoaded",()=>{s.initialize()});
