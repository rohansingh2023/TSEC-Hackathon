import speech_recognition as sr
import nltk
from nltk.tokenize import wordpunct_tokenize

def main():
    r=sr.Recognizer()

    with sr.Microphone() as source:
        r.adjust_for_ambient_noise(source)

        print("Please say something...")

        audio=r.listen(source)
        
        try:
            speech=r.recognize_google(audio)
            print(speech)
            tokenized=nltk.wordpunct_tokenize(speech)
            print(tokenized)
        except Exception as e:
            print("Eror: " + str(e))


        

if __name__ =="__main__":
    main()

