
function loadCorporate(){
    var request = new XMLHttpRequest();
    var url = "https://corporatebs-generator.sameerkumar.website/";
    request.open('GET', url);
    request.onload = function(){
        var obj = JSON.parse(request.response);
        var parra = document.getElementById("FinalCorporate");
        parra.textContent = obj.phrase;
    }
    request.send();

    if (request.status !== 200) {
        callErrorLogger("loadCorporate", "Error al cargar la lista de corporativos");
        return;
    }
}