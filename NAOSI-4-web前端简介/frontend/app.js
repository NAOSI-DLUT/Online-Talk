function httpGet(theUrl) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}
function add_one() {
    console.log("add one clicked!");
    let url = "http://127.0.0.1:5000/add_one";
    httpGet(url);
}
function check_value() {
    console.log("check value clicked!");
    let id = "display";
    let url = "http://127.0.0.1:5000/check";
    let response = httpGet(url);
    document.getElementById(id).innerHTML = response;
    console.log(response);
}