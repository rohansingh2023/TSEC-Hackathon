### Importing dependencies
import cv2

### Loading faceDetection Classifier
face_cascade = cv2.CascadeClassifier('classifiers/haarcascade_frontalface_default.xml')
eye_cascade = cv2.CascadeClassifier('classifiers/haarcascade_eye.xml')
body_cascade = cv2.CascadeClassifier('classifiers/haarcascade_fullbody.xml')

### Detect face function
def detectFace(img):
    face_img = img.copy()
    face_rects = face_cascade.detectMultiScale(face_img, 1.2, 4)
    for (x,y,w,h) in face_rects:
        cv2.rectangle(face_img, (x,y), (x+w, y+h), (255,0,0), 2)
    print("Face Detected")
    return face_img

### Detect eye function
def detectEye(img):
    eye_img = img.copy()
    eye_rects = eye_cascade.detectMultiScale(eye_img, 1.2, 4)
    for (x,y,w,h) in eye_rects:
        cv2.rectangle(eye_img, (x,y), (x+w, y+h), (0,255,0), 2)
    print("Eye Detected")
    return eye_img

### Detect fullbody
def detectFullBody(img):
    body_img = img.copy()
    body_rects = body_cascade.detectMultiScale(body_img, 1.2, 4)
    for (x,y,w,h) in body_rects:
        cv2.rectangle(body_img, (x,y), (x+w, y+h), (0,0,255), 2)
    print("Body Detected")
    return body_img

### Start Live Video
cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read(0)
    # image = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    frame = detectEye(frame)
    frame = detectFace(frame)
    # frame = detectFullBody(frame)
    cv2.imshow("Face Detection", frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
cap.release()
cv2.destroyAllWindows() 
