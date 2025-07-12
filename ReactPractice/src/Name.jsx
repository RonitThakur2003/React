import React from 'react'

function Name({username="Sumit",lastName="Thakur"}) {
  return (
    <div>
      <h1>Hello Everyuone I am {username} {lastName}</h1>
    </div>
  )
}

export default Name
