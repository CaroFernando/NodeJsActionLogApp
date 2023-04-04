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
}