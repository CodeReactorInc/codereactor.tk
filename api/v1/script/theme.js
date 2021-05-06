var THEME = window.localStorage.getItem("theme") || "dark";

function loadTheme(isMobile) {
    let platform = (isMobile) ? "mobile" : "mobile";

    let oldthemenode = document.getElementById("themecss");
    if (oldthemenode != null) {
        document.querySelector("head").removeChild(oldthemenode);
        delete oldthemenode;
    }

    let themenode = document.createElement("link");
    themenode.rel = "stylesheet";
    themenode.id = "themecss";
    themenode.href = "https://codereactor.tk/api/v1/css/" + THEME + "/" + platform + ".css";
    document.querySelector("head").appendChild(themenode);
}