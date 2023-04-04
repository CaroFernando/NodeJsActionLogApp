
function loadUseless(){
    var request = new XMLHttpRequest();
    var url = "https://uselessfacts.jsph.pl/api/v2/facts/random";
    request.open('GET', url);
    request.onload = function(){
        var obj = JSON.parse(request.response);
        var parra = document.getElementById("FinalUseless");
        parra.textContent = obj.text;
    }
    request.send();

    if (request.status !== 200) {
        callErrorLogger("loadUseless", "Error al cargar la lista de datos inútiles");
        return;
    }
}