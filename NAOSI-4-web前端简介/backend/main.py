from flask import Flask
from flask import make_response, request
app = Flask(__name__)

messages = []


@app.route("/get_messages")
def check():
    res = make_response("\n".join([x[0] + " " + x[1] for x in messages]))
    res.headers.add("Access-Control-Allow-Origin", "*")
    return res


@app.route("/add_message")
def add_one():
    global messages
    name, msg = request.args.get("name"), request.args.get("msg")
    if len(name)+len(msg) > 2048:
        res = make_response("Too long")
    else:
        messages.append((name, msg))
        if len(messages) > 64:
            messages.pop(0)
        res = make_response("OK")
    res.headers.add("Access-Control-Allow-Origin", "*")
    return res


if __name__ == '__main__':
    app.run()
