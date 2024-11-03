import{j as e}from"./jsx-runtime.BQrSPCSS.js";import{r}from"./index.Cj_FO6QK.js";function g({code:d}){const[a,p]=r.useState(d||'print("Hello, World!")'),[i,c]=r.useState(""),[u,m]=r.useState(null),l=r.useRef(null);r.useEffect(()=>{const o=(()=>{const t=new Blob([`
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
      `],{type:"application/javascript"});return new Worker(URL.createObjectURL(t))})();return m(o),o.onmessage=t=>{console.log("Message received from worker:",t.data),t.data.results?c(t.data.results):t.data.error&&c(`Error: ${t.data.error}`)},()=>{o&&o.terminate()}},[]),r.useEffect(()=>{const n=document.createElement("script");n.src="https://cdn.jsdelivr.net/npm/ace-builds@1.4.12/src-min-noconflict/ace.js",n.onload=()=>{const o=document.createElement("script");o.src="https://cdn.jsdelivr.net/npm/ace-builds@1.4.12/src-min-noconflict/mode-python.js",document.body.appendChild(o);const t=document.createElement("script");if(t.src="https://cdn.jsdelivr.net/npm/ace-builds@1.4.12/src-min-noconflict/theme-gruvbox.js",document.body.appendChild(t),window.ace&&l.current){const s=window.ace.edit(l.current);s.session.setMode("ace/mode/python"),s.setTheme("ace/theme/gruvbox"),s.setHighlightActiveLine(!1),s.setFontSize(14),s.setValue(a,-1),s.setOptions({minLines:1,maxLines:30}),s.on("change",()=>{p(s.getValue())})}},document.body.appendChild(n)},[]);const h=()=>{console.log("Running code:",a),u.postMessage({python:a})},f=()=>{c("")};return e.jsx("div",{className:"flex flex-col items-center mb-2",children:e.jsxs("div",{className:"w-full max-w-xl mx-auto  bg-neutral-700 shadow-md relative",children:[e.jsxs("div",{className:"absolute z-10 top-0 right-0 flex space-x-1",children:[e.jsx("button",{onClick:f,className:"px-1 bg-neutral-900/20 text-neutral-300 hover:bg-red-600",children:e.jsx("i",{className:"ti ti-refresh"})}),e.jsx("button",{onClick:h,className:"px-1 bg-neutral-900/20 text-neutral-300 hover:bg-green-600",children:e.jsx("i",{className:"ti ti-player-play"})})]}),e.jsx("div",{className:"h-auto",children:e.jsx("div",{ref:l,className:"w-full  mb-1"})}),i&&e.jsx("div",{className:"p-2 bg-[#282828] text-sm text-neutral-200 font-mono whitespace-pre-wrap mt-2",children:e.jsx("pre",{children:i})})]})})}export{g as default};
