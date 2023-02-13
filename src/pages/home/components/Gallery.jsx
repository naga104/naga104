import React from 'react'
import naga from "../../../assests/core.jpg"
import img1 from "../../../assests/5g.jpg"
import img2 from "../../../assests/inter.jpg"

const Gallery = () => {
  return (
    <>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-2/3 mx-auto">
      <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
        <img alt="gallery" className="w-full object-cover h-full object-center block opacity-65 absolute inset-0" src={naga}/>
        <div className="text-center relative z-10 w-full">
          <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">Core Networking</h2>
          <p className="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
          <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More...
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-wrap -mx-2">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
            <img alt="gallery" className="w-full object-cover h-full object-center block opacity-65 absolute inset-0" src={img1}/>
            <div className="text-center relative z-10 w-full">
              <h2 className="text-xl text-gray-900 font-medium title-font mb-2 text-white">5G Networking services</h2>
              <p className="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
              <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More...
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="px-2 w-1/2">
          <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
            <img alt="gallery" class="w-full object-cover h-full object-center block opacity-65 absolute inset-0" src={img2}/>
            <div class="text-center relative z-10 w-full">
              <h2 class="text-xl text-gray-900 font-medium title-font mb-2">Intergration Newtwork</h2>
              <p class="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
              <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More...
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Gallery