from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def hello_world():
    return "hello world"

@app.route('/eyeTrack', methods=['POST'])
def eyeTrack():
    file = request.files['image']

    return file.filename

if __name__ == "__main__":
    app.run(debug=True)