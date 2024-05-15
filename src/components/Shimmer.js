import React from 'react'
import Header from './Header'
const MovieCardShimmer = () => {
    return (<div className="ml-2 bg-gray-700 cursor-pointer overflow-x-auto no-scrollbar md:h-[298px] w-36 md:w-[192px]">
    </div>)
}
const Shimmer = () => {
    return (
        <div className='bg-black'>
            <Header isShimmer={true} />
        <div className="flex flex-col justify-between h-screen min-h-screen text-gray-400">
            <div className="w-screen h-screen min-h-screen bg-black md:pt-0">
                <div className="w-screen aspect-video pt-[30%] md:pt-[20%] px-6 md:px-12 absolute text-white bg-gradient-to-r from-black">
                    <h1 className="p-4 mb-2 text-2xl font-bold bg-gray-700 md:text-5xl w-36"> </h1>
                    <p className="hidden md:inline-block md:w-1/2 bg-gray-700 h-36"> </p>
                    <div className="flex justify-between">
                        
                    </div>
                </div>
            </div>
            <div className="z-30 mt-0 px-8 md:-mt-52 bg-black">
                <h1 className="w-1/4 pb-2 pl-4 ml-4 text-lg bg-gray-700 md:text-3xl md:p-4"> </h1>
                <div className="flex overflow-x-scroll no-scrollbar">
                    <div className="flex p-2">
                        <MovieCardShimmer />
                        <MovieCardShimmer />
                        <MovieCardShimmer />
                        <MovieCardShimmer />
                        <MovieCardShimmer />
                        <MovieCardShimmer />
                        <MovieCardShimmer />
                    </div>
                </div>
                <h1 className="w-1/4 pb-2 pl-4 ml-4 text-lg bg-gray-700 md:text-3xl md:p-4"> </h1>
                <div className="flex overflow-x-scroll no-scrollbar">
                    <div className="flex p-2">
                        <MovieCardShimmer />
                        <MovieCardShimmer />
                        <MovieCardShimmer />
                        <MovieCardShimmer />
                        <MovieCardShimmer />
                        <MovieCardShimmer />
                        <MovieCardShimmer />
                    </div>
                </div>
                <h1 className="w-1/4 pb-2 pl-4 ml-4 text-lg bg-gray-700 md:text-3xl md:p-4"> </h1>
                <div className="flex overflow-x-scroll no-scrollbar">
                    <div className="flex p-2">
                        <MovieCardShimmer />
                        <MovieCardShimmer />
                        <MovieCardShimmer />
                        <MovieCardShimmer />
                        <MovieCardShimmer />
                        <MovieCardShimmer />
                        <MovieCardShimmer />
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}


export default Shimmer