
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
    request.send();

    if (request.status !== 200) {
        callErrorLogger("loadEmpleados", "Error al cargar la lista de empleados");
        return;
    }
}