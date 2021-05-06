function getBasicLangCode() {
    if (navigator.language.startsWith("pt")) {
        return "pt";
    } else {
        return "en";
    }
}

function autoLoadLang(forceEnglish) {
    var langnode = document.createElement("script");
    if (forceEnglish === true) langnode.src = "https://codereactor.tk/internal/lang/en.js";
    else langnode.src = "https://codereactor.tk/internal/lang/" + getBasicLangCode() + ".js";
    document.querySelector("head").appendChild(langnode);
}