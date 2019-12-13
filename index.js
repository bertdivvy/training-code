function random_language() {
    var random = Math.floor(Math.random() * 3);
    var languageList = ["english", "spanish", "greek", "french"];
    return languageList[random];
}