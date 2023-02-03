import speech_recognition as sr
import nltk
from nltk.tokenize import wordpunct_tokenize

def main():
    # r=sr.Recognizer()

    # with sr.Microphone() as source:
    #     r.adjust_for_ambient_noise(source)

    #     print("Please say something...")

    #     audio=r.listen(source)
        
    #     try:
    #         speech=r.recognize_google(audio)
    #         print(speech)
    #         tokenized=nltk.wordpunct_tokenize(speech)
    #         print(tokenized)
    #     except Exception as e:
    #         print("Eror: " + str(e))
        

    #     matchedKeysCount=matchKeyWords(['hello', 'everyone','bath'], tokenized)

    #     print(matchedKeysCount)


    sound="ENG_M.wav"

    r=sr.Recognizer()

    with sr.AudioFile(sound) as source:
        r.adjust_for_ambient_noise(source)

        print("Converting Audio File to Text...")

        audio=r.listen(source)

        try:
            text=r.recognize_google(audio)
            print("Conveted Audio is: \n"+text)
            tokenized=nltk.wordpunct_tokenize(text)
            print(tokenized)
        except Exception as e:
            print(e)


def matchKeyWords(keys, tokenized):
    matchedWords=0
    for key in keys:
        for word in tokenized:
            if(word==key):
                matchedWords=matchedWords+1
                break
    return matchedWords

if __name__ =="__main__":
    main()

