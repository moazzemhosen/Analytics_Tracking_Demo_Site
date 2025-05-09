import React from 'react'
import VideoIframe from '../components/VideoIframe'
import Navbar from '../components/Navbar'

const IframeVideo = () => {
    return (
        <>
        <Navbar/>
        <div className="max-w-5xl mx-auto mt-6 px-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-center">
                What is Google Analytics
            </h1>
            <VideoIframe
            id="v1"
                src="https://www.youtube.com/embed/ny2rBxwvxBY?enablejsapi=1"
                title="What is Google Analytics"
            />
        </div>
        </>
    )
}


export default IframeVideo