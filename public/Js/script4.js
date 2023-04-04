function loadListNoticias(){
    var request = new XMLHttpRequest();
    var input = document.getElementById("searchbox4");
    var searchvalue = input.value;
    // set input value to "bitcoin" if empty
    if(searchvalue == ""){
        searchvalue = "azure";
    }
    var url = `https://newsapi.org/v2/everything?qInTitle=${searchvalue}&language=es&apiKey=bd44e6060e154f42a52471e156ae59f0`;
    request.open('GET', url);
    request.onload = function(){
        var obj = JSON.parse(request.response);
        var data = obj.articles;
        var i = Math.floor(Math.random() * data.length);
        var element = data[i];
        var imgn = document.getElementById("FinalImg0");
        var titlen = document.getElementById("FinalTitulo0");
        var textn = document.getElementById("FinalTexto0");
        var linkn = document.getElementById("FinalLink0");
        titlen.textContent = element.title;
        textn.textContent = element.description;
        linkn.setAttribute("href", element.url);
        imgn.setAttribute("src", element.urlToImage);
    }
    request.send();
}