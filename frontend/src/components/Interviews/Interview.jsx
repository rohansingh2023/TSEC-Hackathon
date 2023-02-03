// import React, { useState, useRef, useEffect } from "react";
// import Webcam from "react-webcam";
// import { ReactMediaRecorder } from "react-media-recorder";

// let gumStream = null;
// let recorder = null;
// let audioContext = null;

// const Interview = () => {
//   const webcamRef = useRef(null);
//   const [imgSrc, setImgSrc] = React.useState(null);

//   const capture = React.useCallback(() => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     setImgSrc(imageSrc);
//     console.log("type: " + typeof imageSrc);
//     // const finalImg = window.location.href = 'data:application/octet-stream;base64,' + imgSrc;
//   }, [webcamRef, setImgSrc]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       capture();
//       console.log(imgSrc);
//     }, 20000);

//     return () => clearInterval(interval);
//   }, []);

//   const beginRecording = () => {
//     let constraints = {
//       audio: true,
//       video: false,
//     };

//     audioContext = new window.AudioContext();
//     console.log("sample rate: " + audioContext.sampleRate);

//     navigator.mediaDevices
//       .getUserMedia(constraints)
//       .then(function (stream) {
//         console.log("initializing Recorder.js ...");

//         gumStream = stream;

//         let input = audioContext.createMediaStreamSource(stream);

//         recorder = new window.Recorder(input, {
//           numChannels: 1,
//         });

//         recorder.record();
//         console.log("Recording started");
//       })
//       .catch(function (err) {
//         //enable the record button if getUserMedia() fails
//       });
//   };

//   const endRecording = () => {
//     console.log("stopButton clicked");

//     recorder.stop(); //stop microphone access
//     gumStream.getAudioTracks()[0].stop();

//     recorder.exportWAV(onStop);
//   };

//   const onStop = (blob) => {
//     console.log("uploading...");

//     let data = new FormData();

//     data.append("text", "this is the transcription of the audio file");
//     data.append("wavfile", blob, "recording.wav");

//     const config = {
//       headers: { "content-type": "multipart/form-data" },
//     };
//     axios.post("http://localhost:8080/asr/", data, config);
//   };

//   return (
//     <>
//       {console.log(imgSrc)}
//       <ReactMediaRecorder
//         audio
//         render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
//           <div>
//             <p>{status}</p>
//             <button
//               onClick={() => {
//                 startRecording();
//                 beginRecording();
//               }}
//             >
//               start recording
//             </button>
//             <button
//               onClick={() => {
//                 stopRecording();
//                 endRecording();
//               }}
//             >
//               stop recording
//             </button>
//             <video src={mediaBlobUrl} autoPlay loop controls></video>
//           </div>
//         )}
//       />
//       <Webcam
//         audio={false}
//         className="h-80 rounded-2xl"
//         ref={webcamRef}
//         screenshotFormat="image/jpeg"
//       />
//       <button onClick={capture}>Capture photo</button>
//       {imgSrc && <img src={imgSrc} />}
//     </>
//   );
// };

// // https://www.npmjs.com/package/react-webcam

// export default Interview;

import React, { useRef } from "react";
import Webcam from "react-webcam";

const Interview = () => {
  const webRef = useRef(null);
  const showImage = () => {
    let img = webRef.current.getScreenshot();
  };
  return (
    // <div className='mx-auto my-10 text-center'>
    <div>
      <Webcam className="h-80 rounded-2xl" ref={webRef} />
      <button onClick={showImage}></button>
    </div>
  );
};

export default Interview;
