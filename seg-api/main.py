from flask import Flask
from totalsegmentator.python_api import totalsegmentator

import os

app = Flask(__name__)

@app.route('/', methods=['POST'])

def get_segmentation():
    #To Do: make the input dinamically changing based on the user's input
    input_path = 'hip_right.nii.gz'
    output_path = './output'
    totalsegmentator(input_path, output_path)
    # To do: return the output result back to the user

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')