from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import base64
from config import NNArch, transform, classes
from PIL import Image
import torch
from torch.autograd import Variable
from deepface import DeepFace
import cv2
from io import BytesIO
import io

app = Flask(__name__)
CORS(app, support_credentials=True)

checkpoint = torch.load('./tsec.pth', map_location=torch.device('cpu'))
model = NNArch()
model.load_state_dict(checkpoint)
model.eval()

def getEmotion(frame):
	# //img = cv2.imread('happy-person.jpg')
	img = cv2.imread(frame)
	result = DeepFace.analyze(img, actions = ['emotion'])
	# //print(result[0]['dominant_emotion'])
	emotion = result[0]['dominant_emotion']
	return emotion

def prediction(img_path,transformer):
    image=Image.open(img_path)
    image_tensor=transformer(image).float()
    image_tensor=image_tensor.unsqueeze_(0)
    if torch.cuda.is_available():
        image_tensor.cuda()
    input=Variable(image_tensor)
    output=model(input)
    index=output.data.numpy().argmax()
    pred=classes[index]
    return pred

def convert_blob_str_to_jpeg(blob_str):
    # Convert the Blob string to a bytes object
    blob_data = bytes(blob_str, 'utf-8')
    # Determine the format of the image file
    format = Image.open(BytesIO(blob_data)).format
    # Open the bytes object as an image
    image = Image.open(BytesIO(blob_data), format=format)
    # Save the image in JPEG format
    with BytesIO() as output:
        image.save(output, format='JPEG')
        jpeg_data = output.getvalue()
    return jpeg_data

@app.route('/')
def hello_world():
    return "hello world"

@app.route('/eyeTrack', methods=['POST'])
@cross_origin(supports_credentials=True)
def eyeTrack():
    # image_data = request.form.get('image')

    # image_data = base64.decodebytes(image_data.encode('utf-8'))
    # image = Image.open(io.BytesIO(image_data))
    # # do something with the image...
    # return 'Image processed successfully!'
    img = request.json['image']
    image_data = img.split(',')[1]
    image_data = f"b'{image_data}'"
    # img = convert_blob_str_to_jpeg(img)
    # pred = prediction(img, transform)
    # return {"msg": "success", "predictions": pred}
    # if imgBase64:
    imageBytes = base64.b64decode(image_data)
    img = Image.open(io.BytesIO(imageBytes))
    # imageBase64Encoded = base64.b64encode(imageBytes).decode('utf-8')
    return {'result': img}
    # else:
    #     return jsonify({'error': 'Image data not found'})

@app.route('/emotion', methods=['POST'])
@cross_origin(supports_credentials=True)
def emotions():
     img = request.json['emotion']
     pred = getEmotion(img)
     return {"msg": "success", "predictions": pred}

if __name__ == "__main__":
    app.run(debug=True)