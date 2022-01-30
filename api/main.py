from email import message
import joblib 
from flask import Flask,request , jsonify
import json
from flask_cors import cross_origin,CORS

import numpy as np
app=Flask(__name__)
cors=CORS(app)
app.config['CORS_HEADERS']='Content-Type'
model=joblib.load('Random_forest_TriNIT')

@app.route('/predict',methods=['POST'])
@cross_origin()
def predict():
    event = json.loads(request.data)
    values = event
    print(event)
    values = list(map(np.float64,values))
    pre = np.array(values)
    pre = pre.reshape(1,-1)
    res=model.predict(pre)
    print(res)
   
    res=str(res)
    return jsonify(message=res)

if __name__ == '__main__':
    app.run(debug=True)



