import"https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js";import"./Meta.astro_astro_type_script_index_0_lang.DADLLlph.js";document.querySelectorAll("#shareButton").forEach(r=>{r.addEventListener("click",t=>{const e=t.target.closest(".hs-overlay"),o=e.querySelector("iframe").src,a=e.dataset.title||"AyudaEnPython App";navigator.share?navigator.share({title:a,url:o}).then(()=>console.log("Content shared successfully!")).catch(s=>console.error("Error sharing:",s)):console.error("Share API not supported.")})});
