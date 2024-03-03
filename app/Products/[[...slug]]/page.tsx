import React from 'react'
interface Props{
    params: {
        slug : string[]
    }
    }
const Pagesroute = ({params:{slug }}:Props ) => {
  return (
    <div>Pagesroute {slug }</div>
  )
}

export default Pagesroute