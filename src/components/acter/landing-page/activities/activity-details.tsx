import React from 'react'
import Image from 'next/image'
import { Modal } from 'src/components/util/modal/modal'

const myLoader = ({ src, width, quality }) => {
  return `https://acter.ams3.cdn.digitaloceanspaces.com/assets/${src}`
}

export const ActivityDetails = () => {
  return (
    <Modal>
      <Image
        loader={myLoader}
        src={`organisation-logo.png`}
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </Modal>
  )
}
