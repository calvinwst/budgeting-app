from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/test', methods=['GET'])
def test():
    return jsonify({
        "message": "Flask server is running!",
        "status": "success",
        "data": {
            "test": "Hello from Flask!"
        }
    })


if __name__ == '__main__':
    app.run(debug=True, port=8000) 