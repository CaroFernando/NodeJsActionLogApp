
function loadRandomEmoji(){
    var request = new XMLHttpRequest();
    var url = "https://emojihub.yurace.pro/api/random";
    request.open('GET', url);
    request.onload = function(){
        var obj = JSON.parse(request.response);
        var parra = document.getElementById("FinalRandomEmoji");
        var emoji = obj.unicode[0];
        emoji = emoji.replace("U+", "0x");
        parra.textContent = `${obj.name}: ${String.fromCodePoint(emoji)}`;
    }
    request.send();

    if (request.status !== 200) {
        callErrorLogger("loadRandomEmoji", "Error al cargar la lista de emojis");
        return;
    }
}