import React from 'react'

const Child = ({img}) => {
  return (
    <div>Child
        <img src={img} alt="child-img" />
    </div>
  )
}

export default Child