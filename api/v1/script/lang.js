function getBasicLangCode() {
    if (navigator.language.startsWith("pt")) {
        return "pt";
    } else {
        return "en";
    }
}

function loadLang(forceEnglish) {
    let langnode = document.createElement("script");
    if (forceEnglish === true) langnode.src = "https://codereactor.tk/api/v1/lang/en.js";
    else langnode.src = "https://codereactor.tk/api/v1/lang/" + getBasicLangCode() + ".js";
    document.querySelector("head").appendChild(langnode);
}