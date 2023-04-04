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
    const fs = require('fs');

    const data = 'This is the data that will be written to the file.';

    fs.writeFile('example.txt', data, (err) => {
    if (err) throw err;
    console.log('Data has been written to the file successfully!');
    });
}

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

function loadEmpleados(){
    var request = new XMLHttpRequest();
    var url = "https://dummy.restapiexample.com/api/v1/employees";
    var lista = document.getElementById("Practice22List");
    request.open('GET', url);
    request.onload = function(){
        var obj = JSON.parse(request.response);
        var data = obj.data;
        data.forEach(element => {
            var li = document.createElement("li");
            li.setAttribute("class", "list-group-item");
            li.textContent = element.employee_name+", salario: "+element.employee_salary+", edad: "+element.employee_age;
            lista.appendChild(li);
        });
    }
    request.send()
}

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
}

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
}

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
}

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
}

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
}