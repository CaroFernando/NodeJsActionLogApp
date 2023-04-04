
function loadExcuse(){
    var request = new XMLHttpRequest();
    var url = "https://excuser-three.vercel.app/v1/excuse";
    request.open('GET', url);
    request.onload = function(){
        var obj = JSON.parse(request.response)[0];
        console.log(obj);
        var parra = document.getElementById("FinalExcusa");
        parra.textContent = `Categoria: ${obj.category} - ${obj.excuse}`;
    }
    request.send();

    if (request.status !== 200) {
        callErrorLogger("loadExcuse", "Error al cargar la lista de excusas");
        return;
    }
}