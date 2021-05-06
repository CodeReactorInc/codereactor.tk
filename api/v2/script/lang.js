function getBasicLangCode() {
    if (navigator.language.startsWith("pt")) {
        return "pt";
    } else {
        return "en";
    }
}

function autoLoadLang() {
    var langnode = document.createElement("script")
    langnode.src = "https://codereactor.tk/internal/lang/" + getBasicLangCode() + ".js";
    document.querySelector("head").appendChild(langnode);
}