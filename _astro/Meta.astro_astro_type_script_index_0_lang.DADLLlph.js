const t=document.querySelector("html"),e=localStorage.getItem("hs_theme")==="light"||localStorage.getItem("hs_theme")==="auto"&&!window.matchMedia("(prefers-color-scheme: dark)").matches,s=localStorage.getItem("hs_theme")==="dark"||localStorage.getItem("hs_theme")==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches;e&&t.classList.contains("dark")?t.classList.remove("dark"):s&&t.classList.contains("light")?t.classList.remove("light"):s&&!t.classList.contains("dark")?t.classList.add("dark"):e&&!t.classList.contains("light")&&t.classList.add("light");