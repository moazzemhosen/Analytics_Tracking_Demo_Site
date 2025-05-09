import React from 'react'

const VideoIframe = ({ src, title = "Video" }) => {
  return (
    <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 py-4">
    <div className="relative w-full h-0 pb-[56.25%] rounded-2xl overflow-hidden shadow-md">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
  )
}

export default VideoIframe;