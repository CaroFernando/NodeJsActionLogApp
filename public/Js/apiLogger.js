function callLogger(action, message){
    var xhttp = new XMLHttpRequest();

    var body = {
        action : action,
        message : message
    }

    xhttp.open("POST", "http://127.0.0.1:8081/LogAction", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(body));

}

function callErrorLogger(action, message){
    var xhttp = new XMLHttpRequest();

    // body of the request

    var body = {
        action : action,
        message : message
    }

    xhttp.open("POST", "http://127.0.0.1:8081/LogError", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(body));

}