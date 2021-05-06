function getBasicLangCode() {
    if (navigator.language.startsWith("pt")) {
        return "pt";
    } else {
        return "en";
    }
}

function loadLang(forceEnglish) {
    let oldlangnode = document.getElementById("loadedlang");
    if (oldlangnode != null) {
        document.querySelector("head").removeChild(oldlangnode);
        delete oldlangnode;
    }

    let langnode = document.createElement("script");
    langnode.id = "loadedlang";
    if (forceEnglish === true) langnode.src = "https://www.codereactor.tk/api/v1/lang/en.js";
    else langnode.src = "https://www.codereactor.tk/api/v1/lang/" + getBasicLangCode() + ".js";
    document.querySelector("head").appendChild(langnode);
}