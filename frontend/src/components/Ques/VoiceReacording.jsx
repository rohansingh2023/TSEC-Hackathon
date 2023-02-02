import React from 'react'
import {useReactMediaRecorder} from 'react-media-recorder'

const VoiceReacording = () => {
    const {status, startRecording, stopRecording, mediaBlobUrl} = useReactMediaRecorder({audio:true});
  return (
    <div>
        <p>{status}</p>
        <button onClick={startRecording}>start recording</button>
        <button onClick={stopRecording}>stop recording</button>
        <video src={mediaBlobUrl} autoplay loop controls></video>
    </div>
  )
}

export default VoiceReacording