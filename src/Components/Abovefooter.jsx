import React from 'react'
import bg2 from "../assets/abovefooterbg.png"

export const Abovefooter = () => {
  return (
    <>
      <div
        className="w-full h-[200px] mt-44 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg2})` }}
      >
        <div className="flex flex-col md:flex-row mx-auto justify-around items-center py-14">
          <div>
            <p className="font-semibold px-6 md:px-0 text-lg md:text-base tracking-normal leading-[100%] uppercase font-jost mb-4 text-white">
              Book A Table For Your and Family Members
            </p>
            <h1 className="font-jost font-bold tracking-normal leading-[100%] hidden md:block text-4xl text-white">
              Need A Table On Coffee House
            </h1>
          </div>
          <button className="text-white uppercase font-semibold w-[200px] h-[55px] border-2 border-white text-center py-3 px-3">
            book a table
          </button>
        </div>
      </div>
    </>
  )
}
