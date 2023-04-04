
function loadMeme(){
    var request = new XMLHttpRequest();
    var url = "https://meme-api.com/gimme";
    request.open('GET', url);
    request.onload = function(){
        var obj = JSON.parse(request.response);
        console.log(obj);
        var img = document.getElementById("FinalImgMeme");
        img.setAttribute("src", obj.url);
    }
    request.send();

    if (request.status !== 200) {
        callErrorLogger("loadMeme", "Error al cargar la lista de memes");
        return;
    }
}