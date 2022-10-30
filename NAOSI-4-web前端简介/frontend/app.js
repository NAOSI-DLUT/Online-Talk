function httpGet(theUrl) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function upload() {
    let alpha = document.getElementById("name").value;
    let beta = document.getElementById("msg").value;
    // console.log("upload clicked!" + alpha + beta);
    let url = "http://127.0.0.1:5000/add_message?name=" + alpha + "&msg=" + beta;
    res = httpGet(url);
    console.log(res);
}

function download() {
    let url = "http://127.0.0.1:5000/get_messages";
    res = httpGet(url);
    console.log(res);
    res = res.replaceAll("\n", "<br>");
    document.getElementById("output").innerHTML = res;
}