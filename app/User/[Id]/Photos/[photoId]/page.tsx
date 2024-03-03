import React from 'react'
interface Props{
    params: {
        Id: string
        photoId: string
    }
    }
const phptoId = (props:Props) => {
  return (
    <div>{props.params.Id}  and    { props.params.photoId}</div>
  )
}

export default phptoId