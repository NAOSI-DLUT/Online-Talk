from urllib import response
from flask import Flask
from flask import make_response
app = Flask(__name__)

val = 0

@app.route("/check")
def check():
    res = make_response(str(val))
    res.headers.add("Access-Control-Allow-Origin", "*")
    return res

@app.route("/add_one")
def add_one():
    global val
    val += 1
    res = make_response("", 204)
    res.headers.add("Access-Control-Allow-Origin", "*")
    return res