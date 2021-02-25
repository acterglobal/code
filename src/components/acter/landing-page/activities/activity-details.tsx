import React from 'react'
import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
  return `https://acter.ams3.cdn.digitaloceanspaces.com/assets/${src}`
}

export const ActivityDetails = () => {
  return (
    <div>
      <Image
        loader={myLoader}
        src={`organisation-logo.png`}
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </div>
  )
}
