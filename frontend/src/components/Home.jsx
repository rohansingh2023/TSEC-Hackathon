import React from 'react'

const Home = () => {
  return (
    <div class="text-center h-screen pt-[15%] bg-slate-300">
        <h1 data-aos="zoomy-in" class="text-6xl">
            Welcome to AiGyan
        </h1>
        <h2 class="text-3xl mt-5">This is a Web Design workshop</h2>
        <button className='bg-green-400 p-3 m-8 rounded-md'><a href="/interview">interview</a></button>
    </div>
  )
}

export default Home