import"./Meta.astro_astro_type_script_index_0_lang.-b7UGIKM.js";const i=new Blob([`
      importScripts("https://cdn.jsdelivr.net/pyodide/v0.26.3/full/pyodide.js");

      async function loadPyodideAndPackages() {
        self.pyodide = await loadPyodide();
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
          await self.pyodide.runPythonAsync(pythonCode);
          const output = await self.pyodide.runPythonAsync("sys.stdout.getvalue()");
          self.postMessage({ results: output });
        } catch (error) {
          self.postMessage({ error: error.message });
        }
      };
      `],{type:"application/javascript"});class r{constructor(t,e){this.worker=new Worker(URL.createObjectURL(i)),this.setupStyles(),this.container=t,this.container.classList.add("rb-container"),this.createEditor(e),this.createButtons(),this.createOutput()}setupStyles(){const t=document.createElement("style");t.textContent=`
      .rb-btn { 
        background-color: rgba(23, 23, 23, 0.2); color: #737373;
        border: 1px solid #737373; text-align: center; font-size: 0.875rem;
        border-radius: 4px; margin-left: 4px; padding: 0 4px 0 4px;
      }
      .rb-btn:hover { color: #d4d4d4; border-color: #d4d4d4; }
      .rb-editor { border-radius: 4px; padding: 2px; }
      .rb-container {
        position: relative; background-color: #282828; border-radius: 4px;
        padding: 0px; margin: 24px 0px;
      }
      .rb-btn-group {
        position: absolute; z-index: 100; top: 2px; right: 4px; margin: 0px;
      }
      .rb-output { margin: 0; padding: 0; color: #fafafa; }
      .rb-output:not(:empty) {
        font-family: monospace; font-size: 0.875rem;
        margin: 5px 32px; padding: 0 0 4px 0;
      }
    `,document.head.appendChild(t)}createEditor(t){const e=document.createElement("div");e.classList.add("rb-editor"),this.editor=ace.edit(e),this.editor.setTheme("ace/theme/gruvbox"),this.editor.session.setMode("ace/mode/python"),this.editor.setValue(t),this.editor.setOptions({fontSize:"0.875rem",highlightActiveLine:!1,highlightGutterLine:!1,showFoldWidgets:!1,showGutter:!0,showPrintMargin:!1,minLines:2,maxLines:30}),this.container.appendChild(e)}createButton(t,e){const o=document.createElement("button");return o.textContent=t,o.classList.add("rb-btn"),o.addEventListener("click",e),o}createButtons(){const t=document.createElement("div");t.classList.add("rb-btn-group"),t.appendChild(this.createButton("▷",()=>this.runCode())),t.appendChild(this.createButton("⟲",()=>this.clearOutput())),t.appendChild(this.createButton("⧈",()=>this.copyCode())),this.container.appendChild(t)}createOutput(){this.output=document.createElement("div"),this.output.classList.add("rb-output"),this.container.appendChild(this.output)}runCode(){const t=this.editor.getValue();this.worker.postMessage({pythonCode:t}),this.worker.onmessage=e=>{const{results:o,error:n}=e.data;this.output.textContent=o||n}}clearOutput(){this.output.textContent=""}copyCode(){const t=this.editor.getValue();navigator.clipboard.writeText(t).then(()=>{console.log("Code copied to clipboard")}).catch(e=>{console.error("Could not copy text: ",e)})}static initialize(){document.querySelectorAll("pre.runnable").forEach(e=>{const o=e.textContent.trim(),n=document.createElement("div");e.replaceWith(n),new r(n,o).editor.clearSelection(!0)})}}document.addEventListener("DOMContentLoaded",()=>{r.initialize()});
