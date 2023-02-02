import React from 'react'

const Navbar = () => {
  return (
    <div class="flex sticky top-0 space-between justify-between bg-green-500 px-8 py-4 font-semibold text-white font-poppins capitalize">
        <div class="flex flex-row space-x-4">
            <a href="/">home</a>
            <a href="/interview">interview</a>
            <a href="/tips">tips</a>
        </div>
        <div class="flex flex-row space-x-4 left-0">
            <a href="/login">login</a>
            <a href="/register">register</a>
        </div>
    </div>
  )
}

export default Navbar