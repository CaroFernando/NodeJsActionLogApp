
function loadAnimeQuote(){
    var request = new XMLHttpRequest();
    var url = "https://animechan.vercel.app/api/random";
    request.open('GET', url);
    request.onload = function(){
        var obj = JSON.parse(request.response);
        var parra = document.getElementById("FinalFraseAnime");
        parra.textContent = `"${obj.quote}" - ${obj.character} (${obj.anime})`;
    }
    request.send();

    if (request.status !== 200) {
        callErrorLogger("loadAnimeQuote", "Error al cargar la lista de frases de anime");
        return;
    }
}