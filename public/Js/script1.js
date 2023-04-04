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