import React from 'react'

interface Props{
  params: {
    Id: string
  }
}
const UserId = ({params:{Id}}:Props) => {
  return (
    <div>
      <h1 className='text-red'>{Id}</h1>
    </div>
  )
}

export default UserId