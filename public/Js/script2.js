function loadListGato(){
    var request = new XMLHttpRequest();
    var url = "https://catfact.ninja/fact?max_length=200";
    request.open('GET', url);
    request.onload = function(){
        var obj = JSON.parse(request.response);
        var parra = document.getElementById("FinalDatoGato");
        parra.textContent = obj.fact;
    }
    request.send();
}