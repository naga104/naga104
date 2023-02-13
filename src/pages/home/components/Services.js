
import React from 'react'
import img1 from "../../../assests/networking.jpg"
import img2 from "../../../assests/telecom.jpg"
import img3 from "../../../assests/inter.jpg"
import img4 from "../../../assests/core.jpg"

import { Carousel } from 'flowbite-react'

const Services = () => {
  return (
    <>
       <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
  <Carousel slide={false}>
    <img
      src={img1}
      alt="..."
    />
    <img
      src={img2}
      alt="..."
    />
    <img
      src={img3}
      alt="..."
    />
    <img
      src={img4}
      alt="..."
    />
    <img
      src={img1}
      alt="..."
    />
  </Carousel>
</div>
</>
  )
}

export default Services