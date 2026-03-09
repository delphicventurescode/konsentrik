from flask import Flask, send_from_directory
import os

app = Flask(__name__)

# Route to serve the main shell
@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

# Generic route to serve files from subdirectories (breathing, mood, etc.)
@app.route('/<path:path>')
def send_static(path):
    return send_from_directory('.', path)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
