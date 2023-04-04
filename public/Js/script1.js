function loadListPerro(){
    var request = new XMLHttpRequest();
    var url = "https://dog.ceo/api/breeds/image/random";
    request.open('GET', url);
    request.onload = function(){
        var obj = JSON.parse(request.response);
        var img = document.getElementById("FinalImagenPerro");
        img.setAttribute("src", obj.message);
    }
    request.send();

    if (request.status !== 200) {
        callErrorLogger("loadListPerro", "Error al cargar la lista de perros");
        return;
    }
}