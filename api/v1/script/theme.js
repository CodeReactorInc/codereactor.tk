var THEME = window.localStorage.getItem("crtheme") || "dark";

const ThemeMGR = {
    load: function(isMobile) {
        let platform = (isMobile) ? "mobile" : "desktop";

        let oldthemenode = document.getElementById("themestylesheet");
        if (oldthemenode != null) {
            document.querySelector("head").removeChild(oldthemenode);
            delete oldthemenode;
        }

        let themenode = document.createElement("link");
        themenode.rel = "stylesheet";
        themenode.id = "themestylesheet";
        themenode.href = "https://www.codereactor.tk/api/v1/stylesheet/" + ThemeMGR.get() + "/" + platform + ".css";
        document.querySelector("head").appendChild(themenode);
    },

    set: function(theme) {
        window.localStorage.setItem("CRTheme", theme);
    },

    get: function() {
        let theme = window.localStorage.getItem("CRTheme");
        if (theme != "dark" && theme != "light") return "dark";
        return theme;
    }
};
