import React,{useRef} from 'react'
import Webcam from 'react-webcam'

const Interview = () => {
  const webRef = useRef(null)
  const showImage = ()=>{
    let img = webRef.current.getScreenshot();
  }
  return (
    // <div className='mx-auto my-10 text-center'>
      <div > 

      <Webcam className='h-80 rounded-2xl' ref={webRef}/>
      <button  onClick={showImage}></button>
      
    </div>
  )
}

export default Interview