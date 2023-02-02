import React from 'react'

const Login = () => {

    // box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, 0.37);
    // display: flex;
    // justify-content: space-between;
    // text-align: start;
    // flex-direction: column;
    // padding: 64px;
    // margin: 32px auto;
    // width: 20%;
    // border-radius: 12px;
    // color: rgba(0, 0, 0, 0.75);
    // transition: all 4s;

    return (
        <div className='w-[50%] mx-auto text-center'>
            <h1 className='m-5 text-4xl'>Login</h1>
            <form action="/login" method="post" className='shadow-lg flex flex-col justify-between text-start p-16 text-xl'>
                <div className='flex flex-col'>
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="eg.alanwalker" />
                </div>
                <div className='flex flex-col'>
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="****" />
                </div>
                <button type="submit" className='bg-green-500 text-white p-3 m-2 w-64 mx-auto rounded-md'>Sign In</button>
            </form>
        </div>
    )
}

export default Login