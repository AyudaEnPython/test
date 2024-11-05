import{j as t}from"./jsx-runtime.BQrSPCSS.js";import{r as n}from"./index.Cj_FO6QK.js";function v({code:d}){const[a,u]=n.useState(d||'print("Hello, World!")'),[i,l]=n.useState(""),[p,m]=n.useState(null),c=n.useRef(null),h=o=>{const r=o.message||o.toString(),e=r.split(`
`);return e[e.length-2]||r};n.useEffect(()=>{const r=(()=>{const e=new Blob([`
        importScripts('https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js');

        (async () => {
          self.pyodide = await loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/' });
          self.postMessage({ type: 'ready' });
        })();

        self.onmessage = async (event) => {
          console.log('Message received from main thread:', event.data);
          const { python } = event.data;

          try {
            await self.pyodide.runPythonAsync(\`
              import sys
              import io
              sys.stdout = io.StringIO()
            \`);
            
            await self.pyodide.loadPackagesFromImports(python);
            await self.pyodide.runPythonAsync(python);
            const results = self.pyodide.runPython('sys.stdout.getvalue()');
            
            self.postMessage({ results });
            console.log('Execution result:', results);
          } catch (error) {
            self.postMessage({ error: error.message });
            console.error('Execution error:', error);
          }
        };
      `],{type:"application/javascript"});return new Worker(URL.createObjectURL(e))})();return m(r),r.onmessage=e=>{console.log("Message received from worker:",e.data),e.data.results?l(e.data.results):e.data.error&&l(h(e.data.error))},()=>{r&&r.terminate()}},[]),n.useEffect(()=>{const o=document.createElement("script");o.src="https://cdn.jsdelivr.net/npm/ace-builds@1.36.4/src-min-noconflict/ace.js",o.onload=()=>{const r=document.createElement("script");r.src="https://cdn.jsdelivr.net/npm/ace-builds@1.36.4/src-min-noconflict/mode-python.js",document.body.appendChild(r);const e=document.createElement("script");if(e.src="https://cdn.jsdelivr.net/npm/ace-builds@1.36.4/src-min-noconflict/theme-gruvbox.js",document.body.appendChild(e),window.ace&&c.current){const s=window.ace.edit(c.current);s.setTheme("ace/theme/gruvbox"),s.session.setMode("ace/mode/python"),s.renderer.setScrollMargin(10,10),s.setValue(a,-1),s.setOptions({fontSize:"0.875rem",highlightActiveLine:!1,highlightGutterLine:!1,showFoldWidgets:!1,showPrintMargin:!1,minLines:2,maxLines:30}),s.on("change",()=>{u(s.getValue())})}},document.body.appendChild(o)},[]);const f=()=>{console.log("Running code:",a),p.postMessage({python:a})},x=()=>{l("")},g=()=>{navigator.clipboard.writeText(a).then(()=>{console.log("Code copied to clipboard")}).catch(o=>{console.error("Could not copy text: ",o)})};return t.jsx("div",{className:"flex flex-col items-center my-6",children:t.jsxs("div",{className:"w-full max-w-xl mx-auto  bg-neutral-700 shadow-md relative leading-normal",children:[t.jsx("div",{ref:c,className:""}),i&&t.jsx("div",{className:"p-2 bg-[#282828] text-sm text-neutral-200 font-mono whitespace-pre-wrap",children:t.jsx("div",{children:i})}),t.jsxs("div",{className:"absolute z-100 top-1 right-1 flex space-x-1",children:[t.jsx("button",{onClick:f,className:"px-1 bg-neutral-900/20 border border-neutral-500 rounded text-neutral-500 hover:border-neutral-300 hover:text-neutral-300",children:t.jsx("i",{className:"ti ti-player-play"})}),t.jsx("button",{onClick:x,className:"px-1 bg-neutral-900/20 border border-neutral-500 rounded text-neutral-500 hover:border-neutral-300 hover:text-neutral-300",children:t.jsx("i",{className:"ti ti-refresh"})}),t.jsx("button",{onClick:g,className:"px-1 bg-neutral-900/20 border border-neutral-500 rounded text-neutral-500 hover:border-neutral-300 hover:text-neutral-300",children:t.jsx("i",{className:"ti ti-copy"})})]})]})})}export{v as default};
