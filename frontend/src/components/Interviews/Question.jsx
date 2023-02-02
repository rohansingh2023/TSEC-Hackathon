import React, { useState, useRef, useEffect } from "react";
import Navbar from "../dashboard/Navbar";
import Interview from "./Interview";
import { Link } from "react-router-dom";
import Webcam from "react-webcam";
import { ReactMediaRecorder } from "react-media-recorder";

let gumStream = null;
let recorder = null;
let audioContext = null;

const Question = () => {
  const [quesno, setQuesNo] = useState(1);
  const [but, setBut] = useState("Next");
  const [ans, setAns] = useState(true);
  const [a, setA] = useState(false);
  const [qu, Setque] = useState("Tell me something about yourself");
  let arr = [
    "Tell me something about yourself",
    "Why do you want to join your company",
    "Where do you see yourself after 5 years",
    "What are your greatest strengths and weaknesses?",
    "What is your biggest achievement so far?",
    "Talk about the past projects that you had worked on that matches the requirements of the current role.",
    "Talk about your career aspirations that are associated with this job role.",
    "Have the knowledge in hand about the company’s vision, mission, and the work it has done in recent years that inspired you to join the organization.",
    "How do you deal with criticism?",
    "Why should we hire you?",
  ];
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    // const finalImg = window.location.href = 'data:application/octet-stream;base64,' + imgSrc;
  }, [webcamRef, setImgSrc]);

  useEffect(() => {
    const interval = setInterval(() => {
      capture();
      console.log(imgSrc);
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const handleAnswer = () => {
    setAns(false);

    if (but == "Show Statistics") {
      setA(true);
    }
  };

  const handleClick = () => {
    setAns(true);
    console.log(quesno);
    Setque(arr[quesno]);
    setQuesNo(quesno + 1);
    if (quesno > 9) {
      Setque("Thank you! Soham Jadiye");
      setBut("Show Statistics");
    }
  };

  const beginRecording = () => {
    handleAnswer();
    let constraints = {
      audio: true,
      video: false,
    };

    audioContext = new window.AudioContext();
    console.log("sample rate: " + audioContext.sampleRate);

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function (stream) {
        console.log("initializing Recorder.js ...");

        gumStream = stream;

        let input = audioContext.createMediaStreamSource(stream);

        recorder = new window.Recorder(input, {
          numChannels: 1,
        });

        recorder.record();
        console.log("Recording started");
      })
      .catch(function (err) {
        //enable the record button if getUserMedia() fails
      });
  };

  const endRecording = () => {
    handleClick();
    console.log("stopButton clicked");

    recorder.stop(); //stop microphone access
    gumStream.getAudioTracks()[0].stop();

    recorder.exportWAV(onStop);
  };

  const onStop = (blob) => {
    console.log("uploading...");

    let data = new FormData();

    data.append("text", "this is the transcription of the audio file");
    data.append("wavfile", blob, "recording.wav");

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    axios.post("http://localhost:8080/asr/", data, config);
  };

  return (
    <div className="bg-indigo-100">
      {/* <div className="navbar flex h-[100px] w-full bg-gray-300  shadow-2xl items-center justify-between">
            <div className="flex items-center">
              
              <div className="py-10 px-8">
                <h1 className="text-4xl font-extrabold "></h1>
              </div>
              
            </div>
            <div className=" space-x-4 mr-4 items-center">
              
            </div>
          </div> */}
      <div className="flex flex-col items-center   border-black">
        <div className="mt-10 ">
          <>
            {console.log(imgSrc)}
            <ReactMediaRecorder
              audio
              render={({
                status,
                startRecording,
                stopRecording,
                mediaBlobUrl,
              }) => (
                <div>
                  <p>{status}</p>
                  <button
                    onClick={() => {
                      startRecording();
                      beginRecording();
                    }}
                  >
                    start recording
                  </button>
                  <button
                    onClick={() => {
                      stopRecording();
                      endRecording();
                    }}
                  >
                    stop recording
                  </button>
                  <video src={mediaBlobUrl} autoPlay loop controls></video>
                </div>
              )}
            />
            <Webcam
              audio={false}
              className="h-80 rounded-2xl"
              ref={webcamRef}
              screenshotFormat="image/jpeg"
            />
            <button onClick={capture}>Capture photo</button>
            {imgSrc && <img src={imgSrc} />}
          </>
        </div>
        <div className="grid grid-col-1  w-[1100px] h-[250px] text-center shadow-2xl">
          <div className="question  bg-gray-300 p-24 rounded-lg">
            <p className="text-4xl font-semibold">{qu}</p>
          </div>
        </div>
        <div className="buttons space-x-20 p-10 ">
          <button
            className="text-3xl  font-semibold hover:bg-green-600 bg-green-500 px-6 py-3 shadow-xl rounded-lg "
            onClick={() => {
              startRecording();
              beginRecording();
            }}
          >
            Answer
          </button>
          <button
            disabled={ans}
            className="text-3xl font-semibold hover:bg-green-600 bg-green-500 px-6 py-3 shadow-xl rounded-lg"
            onClick={() => {
              stopRecording();
              endRecording();
            }}
          >
            {a ? (
              <Link className="nav-link " to="/">
                {but}
              </Link>
            ) : (
              <p> {but} </p>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
